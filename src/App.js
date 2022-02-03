import './App.css';
import { Persons } from './components/persons/Persons';
import { Students } from './components/students/Students';

function App() {
  return (
    <div className="App">
      <Students />
      <Persons />
    </div>
  );
}

export default App;
