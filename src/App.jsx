/* libraries */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import Home from './pages/home/Home';
import Starred from './pages/starred/Starred';
import NotFound from './pages/notfound/NotFound';

/* components */
import PageLayout from './components/page-layout/PageLayout';
import MinimalPageLayout from './components/minimal-page-layout/MinimalPageLayout';

/* styles */
import './App.css';
import ShowDetail from './pages/show-detail/ShowDetail';
import UiTheme from './components/ui-theme/UiTheme';
import { useAppContext } from './hooks/useAppContext';

function App() {
  const { uiThemeMode } = useAppContext();

  useEffect(() => {
    if (uiThemeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [uiThemeMode]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/starred' element={<Starred />} />
          </Route>

          <Route element={<MinimalPageLayout />}>
            <Route path='/show/:id' element={<ShowDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <UiTheme />
    </>
  );
}

export default App;
