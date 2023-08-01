/* libraries */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/* pages */
import Home from './pages/home/Home';
import Starred from './pages/starred/Starred';
import NotFound from './pages/notfound/NotFound';

/* components */
import PageLayout from './components/page-layout/PageLayout';

/* styles */
import './App.css';

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/starred' element={<Starred />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
