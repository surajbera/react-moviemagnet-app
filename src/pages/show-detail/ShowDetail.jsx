import { useParams } from 'react-router-dom';
import { getShowById } from '../../services/tvmazeService';
import { useEffect, useState } from 'react';
import { ShowDetailContent, Loader } from '../../components';

const ShowDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showDetail, setShowDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        setIsLoading(true);
        const data = await getShowById(id);
        console.log(data);
        setShowDetail(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShowDetail();
  }, [id]);

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {isLoading && <Loader />}
      {showDetail && <ShowDetailContent data={showDetail} />}
    </div>
  );
};
export default ShowDetail;
