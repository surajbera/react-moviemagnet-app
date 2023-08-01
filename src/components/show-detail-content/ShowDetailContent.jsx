import NotFoundImg from '../../assets/not-found.jpg';
import { removeHtmlTags } from '../../utils/removeHtmlTags';

const ShowDetailContent = ({ data }) => {
  console.log(data);

  return (
    <div>
      <img src={data.image.original ? data.image.original : NotFoundImg} alt={data.name} />
      <p>{data.name}</p>
      <p>{data.rating.average || 'Average rating not available!'}</p>
      <p>{removeHtmlTags(data.summary)}</p>
      <div>
        {data.genres.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div>
        <p>Status: {data.status}</p>
        <p>
          Status: Premiered {data.premiered} on {data.network?.country?.name ?? 'Unknown'}
        </p>
      </div>
      <div className='border-2 border-cyan-500 border-solid'>
        <div>
          <h2>Seasons</h2>
          <p>Seasons in total: {data._embedded.seasons.length}</p>
        </div>
        <div>
          <h2>Episodes</h2>
          <p>
            Episodes in total:
            {data._embedded.seasons.reduce((sum, season) => {
              return sum + season.episodeOrder;
            }, 0)}
          </p>
        </div>
        <div>
          {data._embedded.seasons.map((season) => (
            <div key={season.id}>
              <p>Season {season.number}</p>
              <p>Episodes: {season.episodeOrder}</p>
              <div>
                Aired: {season.premiereDate} - {season.endDate}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {data._embedded.cast.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.person.image ? item.person.image.original : NotFoundImg} />
            </div>
            <div>
              {item.person.name} | {item.character.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowDetailContent;
