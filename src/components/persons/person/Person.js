import './Person.css'

export function Person(props) {
  const person = props.person

  return (
    <div className="person">
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Phone: {person.phone}</p>
      <hr />
    </div>
  );
}
