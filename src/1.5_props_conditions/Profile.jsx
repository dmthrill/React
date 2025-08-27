// Main component to import in App.jsx

import { getImageUrl } from './utils.jsx';

function Avatar({ person, size }) {

    let thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b';
    }
    return (
        <img
            className="avatar"
            src={getImageUrl(person, thumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <>
            <Avatar
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar
                size={90}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    );
}