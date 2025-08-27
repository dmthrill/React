// Main component to import in App.jsx

import Profile from "./Profile";
import { data } from "./data";

export default function Gallery() {
  return (
    <div>
      <h1>Notable data</h1>
      {data.map((person) => (
        <Profile
          key={person.name}
          imageId={person.imageId}
          name={person.name}
          profession={person.profession}
          awards={person.awards}
          discovery={person.discovery}
        />
      ))}
    </div>
  );
}