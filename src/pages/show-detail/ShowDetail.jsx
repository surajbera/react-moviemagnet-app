import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();

  return <div>ShowDetail Page with id: {id}</div>;
};
export default ShowDetail;
