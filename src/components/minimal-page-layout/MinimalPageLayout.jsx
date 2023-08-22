/* libraries */
import { Outlet } from 'react-router-dom';

/* components */
import PageTitle from '../page-title/PageTitle';

const MinimalPageLayout = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-gray-300 root-wrapper bg-white text-black'>
      <PageTitle title='Movie Magnet' subTitle='' />
      <div className='pb-10 pt-16'>
        <Outlet />
      </div>
    </div>
  );
};
export default MinimalPageLayout;
