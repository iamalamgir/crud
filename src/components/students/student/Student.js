import './Student.css'

export function Student(props) {
  const student = props.student

  return (
    <div className="student">
      <p>Name: {student.name}</p>
      <p>FatherName: {student.fathername}</p>
      <p>MotherName: {student.mothername}</p>
      <p>RollNo: {student.rollno}</p>
      <p>RegNo: {student.regno}</p>
      <p>Grade: {student.grade}</p>
      <hr />
    </div>
  );
}
