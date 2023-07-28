import { useState } from 'react';
import { customDelay } from '../../utils/customDelay';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    const response = await fetch('https://api.tvmaze.com/search/shows?q=shoes');
    const data = await response.json();
    await customDelay(1000);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type='text' value={searchInput} onChange={handleInputChange} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};
export default Home;
