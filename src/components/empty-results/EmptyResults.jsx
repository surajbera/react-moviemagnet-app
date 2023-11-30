const EmptyResults = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Search Results Unavailable
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            We apologize, but we couldn't find any matches for your search query. Please refine your
            search terms or explore other sections of our site.
          </p>
        </div>
      </div>
    </section>
  );
};
export default EmptyResults;
