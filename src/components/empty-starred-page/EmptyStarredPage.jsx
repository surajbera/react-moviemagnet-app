import { Link } from 'react-router-dom';

const EmptyStarredPage = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Your Starred Shows List is Empty.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            It looks like you haven't starred any shows yet. Explore our diverse collection and
            discover shows to add to your favorites.
          </p>
          <Link
            to='/'
            className='inline-flex text-white bg-lightPrimary-600 hover:bg-lightPrimary-800 focus:ring-4 focus:outline-none focus:ring-lightPrimary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-lightPrimary-900 my-4 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-800 dark:focus:ring-darkPrimary-300'
          >
            Explore Shows
          </Link>
        </div>
      </div>
    </section>
  );
};
export default EmptyStarredPage;
