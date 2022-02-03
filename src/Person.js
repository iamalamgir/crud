import './Person.css'

export function Person(props) {
  console.log(props);
  // const name = 'Alamgir Hossain';
  // const age = 27;
  const person = props.person

  return (
    <div className="person">
      <p>Name: {person?.name}</p>
      <p>Age: {person?.age}</p>
      <p>Phone: {person?.phone}</p>
      <hr />
    </div>
  );
}
