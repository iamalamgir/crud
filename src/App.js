import './App.css';
import { Persons } from './components/persons/Persons';
import { Students } from './components/students/Students';
import { Increment } from './Increment/increment';
import { Navbar } from './websites/navbar/Nav';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Increment />
        <Students />
        <Persons />
    </div>
  );
}

export default App;
