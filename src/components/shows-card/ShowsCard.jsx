import NotFoundImg from '../../assets/not-found.jpg';
import { removeHtmlTags } from '../../utils/removeHtmlTags';

const ShowsCard = ({ data }) => {
  console.log();

  return (
    <div className='border-2 border-cyan-500 border-solid mb-10'>
      <img
        src={data.image?.medium ? data.image.medium : NotFoundImg}
        alt={data.name}
        className='mb-2'
      />
      <p className='border-2 border-cyan-600 border-solid mb-2'>{data.name}</p>
      <p className='border-2 border-cyan-600 border-solid'>
        {data.summary ? removeHtmlTags(data.summary) : 'No Summary'}
      </p>
    </div>
  );
};
export default ShowsCard;
