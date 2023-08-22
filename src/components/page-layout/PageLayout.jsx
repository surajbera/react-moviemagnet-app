/* libraries */
import { Outlet } from 'react-router-dom';

/* components */
import Navbar from '../navbar/Navbar';
import PageTitle from '../page-title/PageTitle';

const PageLayout = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-gray-300 root-wrapper bg-white text-black'>
      <PageTitle title='Movie Magnet' subTitle='Search for a movie or an actor!!!' />
      <Navbar />
      <div className='pb-10'>
        <Outlet />
      </div>
    </div>
  );
};
export default PageLayout;
