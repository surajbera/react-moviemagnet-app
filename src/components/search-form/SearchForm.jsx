/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

const SearchForm = ({
  onSubmitHandler,
  searchInput,
  searchOption,
  setSearchOption,
  setSearchInput,
  isLoading,
}) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const handleSearchOptionChange = (evt) => {
    setSearchOption(evt.target.value);
    searchInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitHandler} autoComplete='off'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      {/* SEARCH FORM */}
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
        {/* SEARCH INPUT */}
        <input
          ref={searchInputRef}
          type='search'
          id='default-search'
          className='block w-full p-4 pr-[88px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lightPrimary-500 focus:border-lightPrimary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkPrimary-500 dark:focus:border-darkPrimary-500'
          placeholder='Search Movies, Shows...'
          required
          value={searchInput}
          onChange={handleInputChange}
        />
        {!isLoading && (
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-lightPrimary-600 hover:bg-lightPrimary-700 focus:ring-4 focus:outline-none focus:ring-lightPrimary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 dark:focus:ring-darkPrimary-800'
          >
            Search
          </button>
        )}
        {isLoading && (
          <button
            disabled
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-lightPrimary-600 hover:bg-lightPrimary-700 focus:ring-4 focus:outline-none focus:ring-lightPrimary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 dark:focus:ring-darkPrimary-800'
          >
            Loading...
          </button>
        )}
      </div>
      {/* RADIO BUTTON CONTAINER */}
      <ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white my-2 max-w-[400px] mx-auto'>
        <li className='w-full border-gray-200 border-b-0 border-r dark:border-gray-600'>
          <div className='flex items-center pl-3'>
            <input
              checked={searchOption === 'shows' ? true : false}
              id='default-radio-1'
              type='radio'
              value='shows'
              name='search-option'
              onChange={handleSearchOptionChange}
              className='w-4 h-4 text-lightPrimary-600 bg-gray-100 border-gray-300 focus:ring-lightPrimary-500 dark:focus:ring-darkPrimary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='default-radio-1'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Shows
            </label>
          </div>
        </li>
        <li className='w-full dark:border-gray-600'>
          <div className='flex items-center pl-3'>
            <input
              checked={searchOption === 'peoples' ? true : false}
              id='default-radio-2'
              type='radio'
              value='peoples'
              name='search-option'
              onChange={handleSearchOptionChange}
              className='w-4 h-4 text-lightPrimary-600 bg-gray-100 border-gray-300 focus:ring-lightPrimary-500 dark:focus:ring-darkPrimary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='default-radio-2'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Peoples
            </label>
          </div>
        </li>
      </ul>
    </form>
  );
};
export default SearchForm;
