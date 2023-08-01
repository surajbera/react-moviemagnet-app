import NotFoundImg from '../../assets/not-found.jpg';
import { removeHtmlTags } from '../../utils/removeHtmlTags';

const ShowsCard = ({ data, dispatchStarToggle }) => {
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
      <div>
        <a href={`/show/${data.id}`} target='_blank' rel='noreferrer'>
          Read More
        </a>
        <button
          onClick={() => dispatchStarToggle(data.id)}
          type='button'
          className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
        >
          Star Me
        </button>
      </div>
    </div>
  );
};
export default ShowsCard;
