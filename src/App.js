import './App.css';
import { Person } from './Person';

function App() {
  const persons = [
    {
      name: 'Alamgir Hossain',
      age: 26,
      phone: '01571773745'
    },
    {
      name: 'Imran Hossain',
      age: 27,
      phone: '018756387569'
    },
    {
      name: 'Siam Hossain',
      age: 28,
      phone: '016558478474'
    },
    {
      name: 'Hasiv Ahmmed',
      age: 29,
      phone: '015857557887'
    },
    {
      name: 'Mahin Alam',
      age: 30,
      phone: '015837857835'
    }
  ]

  return (
    <div className="App">
      {
       persons.map(function(person) {
          return <Person person={person} />
        })
      }
      {/* <Person person={persons[0]} />
      <Person person={persons[1]} />
      <Person person={persons[2]} />
      <Person person={persons[3]} />
      <Person person={persons[4]} /> */}
    </div>
  );
}

export default App;
