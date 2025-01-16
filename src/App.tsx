import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { peopleFromServer } from './data/people';
import './App.scss';
import { Person } from './types/Person';
import { Autocomplate } from './components/Autocomplate';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

interface Props {
  delay: number;
}

export const App: React.FC<Props> = ({ delay = 300 }) => {
  const [inputValue, setInputValue] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [suggestion, setSuggestion] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  const applyQuery = useMemo(() => debounce(setAppliedQuery, delay), [delay]);

  const filteredPeople = useMemo(() => {
    return peopleFromServer.filter(person =>
      person.name.toLowerCase().includes(appliedQuery.toLowerCase()),
    );
  }, [appliedQuery]);

  useEffect(() => {
    setSuggestion(filteredPeople);
  }, [filteredPeople]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setSelectedPerson(null);
    if (suggestion.length > 1) {
      setIsListOpen(true);
    }

    if (value.trim() !== '') {
      applyQuery(value.trim());
    } else {
      setSuggestion([]);
    }
  };

  const onSelected = (person: Person) => {
    setInputValue(person.name);
    setSelectedPerson(person);
    setSuggestion([]);
    setIsListOpen(false);
  };

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <h1 className="title" data-cy="title">
          {selectedPerson
            ? `${selectedPerson.name} (${selectedPerson.born} - ${selectedPerson.died})`
            : 'No selected person'}
        </h1>

        <div
          className={classNames('dropdown', {
            'is-active': isListOpen,
          })}
        >
          <div className="dropdown-trigger">
            <input
              type="text"
              value={inputValue}
              placeholder="Enter a part of the name"
              className="input"
              data-cy="search-input"
              onChange={handleChangeQuery}
              onFocus={() => setIsListOpen(true)}
            />
          </div>

          <Autocomplate people={suggestion} onSelected={onSelected} />
        </div>

        {suggestion.length === 0 && (
          <div
            className="notification
              is-danger
              is-light
              mt-3
              is-align-self-flex-start"
            role="alert"
            data-cy="no-suggestions-message"
          >
            <p className="has-text-danger">No matching suggestions</p>
          </div>
        )}
      </main>
    </div>
  );
};
