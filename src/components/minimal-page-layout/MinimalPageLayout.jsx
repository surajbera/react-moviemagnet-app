/* libraries */
import { Outlet } from 'react-router-dom';

/* components */
import Navbar from '../navbar/Navbar';
import PageTitle from '../page-title/PageTitle';

const MinimalPageLayout = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-gray-300 root-wrapper bg-white text-black'>
      <PageTitle title='Box Office' subTitle='' />
      <div className='pb-10'>
        <Outlet />
      </div>
    </div>
  );
};
export default MinimalPageLayout;
