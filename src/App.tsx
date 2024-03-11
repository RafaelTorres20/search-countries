import './App.css';
import { Home } from './pages/Home';
import { SwitchProvider } from './providers/SwitchProvider';
function App() {
  return (
    <SwitchProvider>
      <Home />
    </SwitchProvider>
  );
}

export default App;
