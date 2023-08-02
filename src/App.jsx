/* libraries */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import Home from './pages/home/Home';
import Starred from './pages/starred/Starred';
import NotFound from './pages/notfound/NotFound';

/* components */
import PageLayout from './components/page-layout/PageLayout';

/* context */
import { AppContextProvider } from './context/AppContext';

/* styles */
import './App.css';
import ShowDetail from './pages/show-detail/ShowDetail';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/starred' element={<Starred />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/show/:id' element={<ShowDetail />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
