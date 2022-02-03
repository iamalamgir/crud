import './App.css';
import { Person } from './Person';
import { Student } from './Student';


// function App() {
//   const persons = [
//     {
//       name: 'Alamgir Hossain',
//       age: 26,
//       phone: '01571773745'
//     },
//     {
//       name: 'Imran Hossain',
//       age: 27,
//       phone: '018756387569'
//     },
//     {
//       name: 'Siam Hossain',
//       age: 28,
//       phone: '016558478474'
//     },
//     {
//       name: 'Hasiv Ahmmed',
//       age: 29,
//       phone: '015857557887'
//     },
//     {
//       name: 'Mahin Alam',
//       age: 30,
//       phone: '015837857835'
//     }
//   ]

//   return (
//     <div className="App">
//       {
//        persons.map(function(person) {
//           return <Person person={person} />
//         })
//       }
//       {/* <Person person={persons[0]} />
//       <Person person={persons[1]} />
//       <Person person={persons[2]} />
//       <Person person={persons[3]} />
//       <Person person={persons[4]} /> */}
//     </div>
//   );
// }

function App() {
  const students = [
    {
      name: 'Alamgir Hossain',
      fathername: 'Abdul Kader',
      mothername: 'Jahanara Begum',
      rollno: '9530967',
      regno: '18104806811',
      grade: '3.55'
    },
    {
      name: 'Imran Hossain',
      fathername: 'Abdul Kader',
      mothername: 'Jahanara Begum',
      rollno: '9530967',
      regno: '18104806811',
      grade: '3.55'
    },
    {
      name: 'Siam Hossain',
      fathername: 'Abdul Kader',
      mothername: 'Jahanara Begum',
      rollno: '9530967',
      regno: '18104806811',
      grade: '3.55'
    },
    {
      name: 'Hasiv Ahmmed',
      fathername: 'Abdul Kader',
      mothername: 'Jahanara Begum',
      rollno: '9530967',
      regno: '18104806811',
      grade: '3.55'
    },
    {
      name: 'Mahin Alam',
      fathername: 'Abdul Kader',
      mothername: 'Jahanara Begum',
      rollno: '9530967',
      regno: '18104806811',
      grade: '3.55'
    }
  ]

  return (
    <div className="App">
      {
       students.map(function(student) {
          return <Student student={student} />
        })
      }
    </div>
  );
}

export default App;
