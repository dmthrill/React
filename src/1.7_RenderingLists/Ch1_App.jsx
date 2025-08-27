import { people } from './Ch1_data.jsx';
import { getImageUrl } from './Ch1_utils.jsx';

export default function List() {
    const chemist = people.filter(person => person.profession === 'chemist');
    const everyone = people.filter(person => person.profession !== 'chemist');
    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>
                {chemist.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
            <h2>Everyone Else</h2>
            <ul>
                {everyone.map(person =>

                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
        </article>
    );
}