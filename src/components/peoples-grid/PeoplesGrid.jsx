import EmptyResults from '../empty-results/EmptyResults';
import PeoplesCard from '../peoples-card/PeoplesCard';

const PeoplesGrid = ({ peoplesData }) => {
  if (peoplesData.length === 0) return <EmptyResults />;

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='grid grid-cols-1 verysmall:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 dark:gap-6'>
        {peoplesData.map((item) => (
          <PeoplesCard key={item.person.id} data={item.person} />
        ))}
      </div>
    </div>
  );
};
export default PeoplesGrid;
