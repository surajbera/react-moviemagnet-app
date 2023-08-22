import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { getShowById } from '../../services/tvmazeService';
import ShowsCard from '../../components/shows-card/ShowsCard';
import Loader from '../../components/Loader/Loader';
import EmptyStarredPage from '../../components/empty-starred-page/EmptyStarredPage';

const Starred = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [starredShows, setStarredShows] = useState([]);
  const [isError, setIsError] = useState(null);
  const { starredIds } = useAppContext();

  useEffect(() => {
    const fetchStarredShows = async () => {
      try {
        setIsLoading(true);
        // Creating an array of promises for each API call
        const promises = starredIds.map((id) => getShowById(id));

        // Using Promise.all to wait for all promises to resolve
        const shows = await Promise.all(promises);

        setStarredShows(shows);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (starredIds.length > 0) {
      fetchStarredShows();
    }
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <div>An error occurred: {isError}</div>}
      {!isLoading && starredShows.length === 0 && <EmptyStarredPage />}
      {starredShows.length > 0 && (
        <div className='max-w-screen-xl mx-auto px-4'>
          <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 dark:gap-6'>
            {starredShows.map((show) => (
              <ShowsCard key={show.id} data={show} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Starred;
