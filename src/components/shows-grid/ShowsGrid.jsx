import ShowsCard from '../shows-card/ShowsCard';

const ShowsGrid = ({ showsData }) => {
  if (showsData.length === 0) return 'No Results!!!';
  return showsData.map((item) => <ShowsCard key={item.show.id} data={item.show} />);
};
export default ShowsGrid;
