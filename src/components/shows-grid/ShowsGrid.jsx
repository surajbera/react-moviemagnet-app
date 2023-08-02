import ShowsCard from '../shows-card/ShowsCard';
import { useAppContext } from '../../hooks/useAppContext';

const ShowsGrid = ({ showsData }) => {
  const { uiMode } = useAppContext();

  console.log(uiMode);

  if (showsData.length === 0) return 'No Results!!!';
  return showsData.map((item) => <ShowsCard key={item.show.id} data={item.show} />);
};
export default ShowsGrid;
