import { Person } from './person/Person';

export function Persons() {
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
        <div>
            <p>Persons</p>
            {
                persons.map(function(person){
                    return (<Person person={person} />)
                })
            }
            {/* <Person person={persons[0]} />
            <Person person={persons[1]} />
            <Person person={persons[2]} /> */}
        </div>
    )
}