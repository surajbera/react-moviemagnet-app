/* libraries */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import Home from './pages/home/Home';
import Starred from './pages/starred/Starred';
import NotFound from './pages/notfound/NotFound';

/* components */
import PageLayout from './components/page-layout/PageLayout';

/* styles */
import './App.css';
import ShowDetail from './pages/show-detail/ShowDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/starred' element={<Starred />} />
        </Route>

        <Route path='*' element={<NotFound />} />
        <Route path='/show/:id' element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
