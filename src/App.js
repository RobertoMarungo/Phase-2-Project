import Header from './components/Header';
import CommanderList from './components/CommanderList';
import CommanderForm from './components/CommanderForm';
import { CommanderProvider } from './context/CommanderContext';

function App() {
  return (
    <CommanderProvider>
      <Header />
      <CommanderForm />
      <CommanderList />
    </CommanderProvider>
  );
}

export default App;
