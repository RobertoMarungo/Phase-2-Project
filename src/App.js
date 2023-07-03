import Header from './components/Header';
import CommanderList from './components/CommanderList';
import { CommanderProvider } from './context/CommanderContext';

function App() {
  return (
    <CommanderProvider>
      <Header />
      <CommanderList />
    </CommanderProvider>
  );
}

export default App;
