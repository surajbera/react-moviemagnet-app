/* eslint-disable */
import NotFoundImg from '../../assets/not-found.jpg';
import { useAppContext } from '../../hooks/useAppContext';
import { removeHtmlTags } from '../../utils/removeHtmlTags';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';

const ShowsCard = ({ data }) => {
  const { starShow, unstarShow, starredIds } = useAppContext();

  const buttonClasses = 'border-2 border-gray-600 bg-transparent rounded-lg px-6 py-2';

  const handleStarToggle = (id) => {
    if (starredIds.includes(data.id)) {
      unstarShow(data.id);
    } else {
      starShow(data.id);
    }
  };

  return (
    <div className='border-2 border-solid border-gray-300 rounded-lg p-2 dark:border-none dark:p-0'>
      <div className='w-[200px] mx-auto mb-2 h-[300px] max-w-full'>
        <img
          src={data.image?.medium ? data.image.medium : NotFoundImg}
          alt={data.name}
          className='rounded-xl w-full h-full object-cover block'
        />
      </div>
      <p className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {data.name}
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {data.summary ? removeHtmlTags(data.summary) : 'No Summary'}
      </p>
      <div className='flex justify-between'>
        <a
          href={`/show/${data.id}`}
          target='_blank'
          rel='noreferrer'
          class='inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700'
        >
          Read More
          <svg
            class='w-2.5 h-2.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
        </a>
        <button type='button' className={buttonClasses} onClick={() => handleStarToggle(data.id)}>
          {starredIds.includes(data.id) ? (
            <AiTwotoneStar size={26} color='#fde047' />
          ) : (
            <AiOutlineStar size={26} />
          )}
        </button>
      </div>
    </div>
  );
};
export default ShowsCard;
