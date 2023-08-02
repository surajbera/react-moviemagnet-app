import { useState } from 'react';
import { getShowsByQuery, getPeoplesByQuery } from '../../services/tvmazeService';
import SearchForm from '../../components/search-form/SearchForm';
import ShowsGrid from '../../components/shows-grid/ShowsGrid';
import PeoplesGrid from '../../components/peoples-grid/PeoplesGrid';

const Home = () => {
  const [showsData, setShowsData] = useState(null);
  const [peoplesData, setPeoplesData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    if (!searchInput) return;

    setIsLoading(true);
    try {
      setPeoplesData(null);
      setShowsData(null);

      if (searchOption === 'shows') {
        const data = await getShowsByQuery(searchInput);
        setShowsData(data);
      } else {
        const data = await getPeoplesByQuery(searchInput);
        setPeoplesData(data);
      }

      setSearchInput('');
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setPeoplesData(null);
      setShowsData(null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='max-w-2xl px-4 mx-auto mb-10'>
        <SearchForm
          onSubmitHandler={onSubmitHandler}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchOption={searchOption}
          setSearchOption={setSearchOption}
          isLoading={isLoading}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>{showsData && <ShowsGrid showsData={showsData} />}</ul>
      <ul>{peoplesData && <PeoplesGrid peoplesData={peoplesData} />}</ul>
      {isLoading && <div>Loading...</div>}
    </>
  );
};
export default Home;
