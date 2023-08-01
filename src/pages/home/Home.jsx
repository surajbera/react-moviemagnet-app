import { useState } from 'react';
import { getShowsByQuery, getPeoplesByQuery } from '../../services/tvmazeService';
import SearchForm from '../../components/search-form/SearchForm';
import ShowsCard from '../../components/shows-card/ShowsCard';
import PeoplesCard from '../../components/peoples-card/PeoplesCard';

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

      <ul>{showsData && <ShowsCard showsData={showsData} />}</ul>
      <ul>{peoplesData && <PeoplesCard peoplesData={peoplesData} />}</ul>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
export default Home;
