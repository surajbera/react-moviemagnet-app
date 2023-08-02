import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { getShowById } from '../../services/tvmazeService';

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
      {isLoading && <div>Loading...</div>}
      {isError && <div>An error occurred: {isError}</div>}
      {!isLoading && starredShows.length === 0 && 'No shows starred'}
      {starredShows.length > 0 && (
        <div>
          {starredShows.map((show) => (
            <div key={show.id}>{show.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Starred;
