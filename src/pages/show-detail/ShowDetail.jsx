import { useParams } from 'react-router-dom';
import { getShowDetailData } from '../../services/tvmazeService';
import { useEffect, useState } from 'react';
import ShowDetailContent from '../../components/show-detail-content/ShowDetailContent';

const ShowDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showDetail, setShowDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        setIsLoading(true);
        const data = await getShowDetailData(id);
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
      {isLoading && <div>Loading...</div>}
      {showDetail && <ShowDetailContent data={showDetail} />}
    </div>
  );
};
export default ShowDetail;
