/* eslint-disable */
import NotFoundImg from '../../assets/not-found.jpg';
import { useAppContext } from '../../hooks/useAppContext';
import { removeHtmlTags } from '../../utils/removeHtmlTags';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';

const ShowsCard = ({ data }) => {
  const { starShow, unstarShow, starredIds } = useAppContext();

  const buttonClasses = 'border-2 border-gray-500 bg-transparent rounded-lg px-6 py-2';

  const handleStarToggle = (id) => {
    if (starredIds.includes(data.id)) {
      unstarShow(data.id);
    } else {
      starShow(data.id);
    }
  };

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
        <button type='button' className={buttonClasses} onClick={() => handleStarToggle(data.id)}>
          {starredIds.includes(data.id) ? <AiTwotoneStar size={26} /> : <AiOutlineStar size={26} />}
        </button>
      </div>
    </div>
  );
};
export default ShowsCard;
