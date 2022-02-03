import { Student } from './student/Student';

export function Students() {
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
        <div>
            <p>Students</p>
            {
                students.map(function(student) {
                    return <Student student={student} />
                })
            }
        </div>
    )
}
