import React from 'react';

import { Person } from '../types/Person';

interface Props {
  people: Person[];
  onSelected: (person: Person) => void;
}

export const Autocomplate: React.FC<Props> = ({ people, onSelected }) => {
  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <div className="dropdown-content">
        {people.length > 0 &&
          people.map((person: Person) => (
            <div
              key={person.slug}
              className="dropdown-item"
              data-cy="suggestion-item"
              onClick={() => onSelected(person)}
            >
              <p className="has-text-link">{person.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
