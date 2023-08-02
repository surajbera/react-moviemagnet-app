import ShowsCard from '../shows-card/ShowsCard';
import { useAppContext } from '../../hooks/useAppContext';
import EmptyResults from '../empty-results/EmptyResults';

const ShowsGrid = ({ showsData }) => {
  const { uiMode } = useAppContext();

  if (showsData.length === 0) return <EmptyResults />;

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 dark:gap-6'>
        {showsData.map((item) => (
          <ShowsCard key={item.show.id} data={item.show} />
        ))}
      </div>
    </div>
  );
};
export default ShowsGrid;
