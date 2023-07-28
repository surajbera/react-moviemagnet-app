import { useState } from 'react';
import { fetchShowsData } from '../../api/tvmaze';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showsData, setShowsData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    if (!searchInput) return;
    try {
      const data = await fetchShowsData(searchInput);
      console.log(data);
      setShowsData(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='max-w-2xl px-4'>
      <div className=''>
        <form onSubmit={onSubmitHandler}>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pr-[88px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Search Movies, Shows...'
              required
              value={searchInput}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <ul>{showsData && showsData.map((item) => <li key={item.show.id}>{item.show.name}</li>)}</ul>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
export default Home;
