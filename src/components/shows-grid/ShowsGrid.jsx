import ShowsCard from '../shows-card/ShowsCard';
import { useAppContext } from '../../hooks/useAppContext';

const ShowsGrid = ({ showsData }) => {
  const { uiMode } = useAppContext();

  console.log(uiMode);

  if (showsData.length === 0) return 'No Results!!!';
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {showsData.map((item) => (
          <ShowsCard key={item.show.id} data={item.show} />
        ))}
      </div>
    </div>
  );
};
export default ShowsGrid;
