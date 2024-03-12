import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Home } from './pages/Home';
import { SwitchProvider } from './providers/SwitchProvider';
import { SearchProvider } from './providers/SearchProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <SwitchProvider>
          <Home />
          <ToastContainer />
        </SwitchProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
