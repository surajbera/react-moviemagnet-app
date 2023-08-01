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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/starred' element={<Starred />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
