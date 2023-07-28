/* libraries */
import { Outlet } from 'react-router-dom';

/* components */
import Navbar from '../navbar/Navbar';
import AppTitle from '../app-title/AppTitle';

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <AppTitle title='Box Office' subTitle='Are you looking for a movie or an actor?' />
      <Outlet />
    </div>
  );
};
export default PageLayout;
