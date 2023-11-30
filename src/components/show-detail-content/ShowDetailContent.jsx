/* eslint-disable */
import NotFoundImg from '../../assets/not-found.jpg';
import { removeHtmlTags } from '../../utils/removeHtmlTags';
import { AiFillStar } from 'react-icons/ai';

const ShowDetailContent = ({ data }) => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      {/* Hero Section */}
      <div className='flex flex-col items-center md:flex-row'>
        <div className='w-[450px] rounded-lg h-[300px] extrasmall:h-[350px] md:h-[550px] mx-auto mb-6 max-w-full md:w-[35%]'>
          <img
            src={data.image.original ? data.image.original : NotFoundImg}
            alt={data.name}
            className='rounded-xl w-full h-full object-cover block'
          />
        </div>
        <div className='mt-4 md:mt-0 md:w-[65%] pl-6'>
          <h1 className='text-3xl font-semibold flex'>
            <span className='inline-flex mr-5 text-gray-600 dark:text-gray-300'>{data.name}</span>
            <span className='inline-flex items-center'>
              <span className='inline-flex mr-2'>
                <AiFillStar color='#fcd34d' />
              </span>
              <span className='text-xl text-gray-600 dark:text-gray-300'>
                {data.rating.average || 'Average rating not available!'}
              </span>
            </span>
          </h1>

          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            {removeHtmlTags(data.summary, false)}
          </p>
          <div className='mt-4 flex flex-wrap space-x-2'>
            {data.genres.map((item) => (
              <span
                key={item}
                className='bg-lightPrimary-500 dark:bg-darkPrimary-500 text-white px-2 py-1 rounded-md text-sm text-[15px]'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className='mt-8'>
        <p>Status: {data.status}</p>
        <p>
          Status: Premiered {data.premiered} on {data.network?.country?.name ?? 'Unknown'}
        </p>
      </div>

      {/* Seasons and Episodes Section */}
      <div className='border-2 border-cyan-500 mt-8 p-4'>
        <h2 className='text-2xl font-bold'>Seasons</h2>
        <p>Seasons in total: {data._embedded.seasons.length}</p>
        <h2 className='text-2xl font-bold mt-4'>Episodes</h2>
        <p>
          Episodes in total:{' '}
          {data._embedded.seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </p>
        {data._embedded.seasons.map((season) => (
          <div key={season.id} className='mt-4'>
            <p>Season {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>

      {/* Cast Section */}
      <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {data._embedded.cast.map((item) => (
          <div key={item.id} className='text-center'>
            <div className='mx-auto rounded-full w-20 h-20 overflow-hidden'>
              <img
                src={item.person.image ? item.person.image.original : NotFoundImg}
                alt={item.person.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='mt-2 font-semibold'>
              {item.person.name} | {item.character.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowDetailContent;
