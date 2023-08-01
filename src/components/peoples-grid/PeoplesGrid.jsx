import PeoplesCard from '../peoples-card/PeoplesCard';

const PeoplesGrid = ({ peoplesData }) => {
  if (peoplesData.length === 0) return 'No Results!!!';
  return peoplesData.map((item) => <PeoplesCard key={item.person.id} data={item.person} />);
};
export default PeoplesGrid;
