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
    <form onSubmit={onSubmitHandler}>
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
          className='block w-full p-4 pr-[88px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
          placeholder='Search Movies, Shows...'
          required
          value={searchInput}
          onChange={handleInputChange}
        />
        {!isLoading && (
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Search
          </button>
        )}
        {isLoading && (
          <button
            disabled
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Loading...
          </button>
        )}
      </div>
      {/* RADIO BUTTON CONTAINER */}
      <div>
        <div className='flex items-center mb-4'>
          <input
            checked={searchOption === 'shows' ? true : false}
            id='default-radio-1'
            type='radio'
            value='shows'
            name='search-option'
            onChange={handleSearchOptionChange}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='default-radio-1'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Shows
          </label>
        </div>
        <div className='flex items-center'>
          <input
            checked={searchOption === 'peoples' ? true : false}
            id='default-radio-2'
            type='radio'
            value='peoples'
            name='search-option'
            onChange={handleSearchOptionChange}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='default-radio-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Peoples
          </label>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
