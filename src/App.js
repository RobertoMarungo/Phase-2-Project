import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Links from './components/Links';
import CommanderList from './components/CommanderList';
import CommanderForm from './components/CommanderForm';
import { CommanderProvider } from './context/CommanderContext';

function App() {
  return (
    <CommanderProvider>
      <Router>
        <Header />
        <Links />
        <Routes>
          <Route
            exact
            path='/'
            element={<CommanderList />}
          />
          <Route
            path='/form'
            element={<CommanderForm />}
          />
        </Routes>
      </Router>
    </CommanderProvider>
  );
}

export default App;
