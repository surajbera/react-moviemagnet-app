import { useState } from 'react';
import { getShowsByQuery, getPeoplesByQuery } from '../../services/tvmazeService';
import SearchForm from '../../components/search-form/SearchForm';

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
        setShowsData(data);
        setPeoplesData(null);
        setSearchInput('');
      } else {
        const data = await getPeoplesByQuery(searchInput);
        setPeoplesData(data);
        setShowsData(null);
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

      <ul>
        {showsData &&
          searchOption === 'shows' &&
          showsData.map((item) => <li key={item.show.id}>{item.show.name}</li>)}
      </ul>
      <ul>
        {peoplesData &&
          searchOption === 'peoples' &&
          peoplesData.map((item) => <li key={item.person.id}>{item.person.name}</li>)}
      </ul>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
export default Home;
