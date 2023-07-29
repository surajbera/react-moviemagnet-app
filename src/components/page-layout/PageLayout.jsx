/* libraries */
import { Outlet } from 'react-router-dom';

/* components */
import Navbar from '../navbar/Navbar';
import PageTitle from '../page-title/PageTitle';

const PageLayout = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-gray-300 root-wrapper'>
      <Navbar />
      <PageTitle title='Box Office' subTitle='Are you looking for a movie or an actor?' />
      <Outlet />
    </div>
  );
};
export default PageLayout;
