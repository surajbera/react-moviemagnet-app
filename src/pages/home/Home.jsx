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

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    if (!searchInput) return;
    try {
      if (searchOption === 'shows') {
        const data = await getShowsByQuery(searchInput);
        setPeoplesData(null);
        setShowsData(data);
        setSearchInput('');
      } else {
        const data = await getPeoplesByQuery(searchInput);
        setShowsData(null);
        setPeoplesData(data);
        setSearchInput('');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='max-w-2xl px-4'>
      <SearchForm
        onSubmitHandler={onSubmitHandler}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchOption={searchOption}
        setSearchOption={setSearchOption}
      />

      <ul>{showsData && <ShowsGrid showsData={showsData} />}</ul>
      <ul>{peoplesData && <PeoplesGrid peoplesData={peoplesData} />}</ul>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
export default Home;
