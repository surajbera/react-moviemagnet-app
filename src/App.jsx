/* libraries */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import { Home, Starred, NotFound, ShowDetail } from './pages';

/* components */
import { PageLayout, MinimalPageLayout, UiTheme } from './components';

/* styles */
import './App.css';

/* context */
import { useAppContext } from './hooks';

function App() {
  const { uiThemeMode } = useAppContext();

  useEffect(() => {
    uiThemeMode === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
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
