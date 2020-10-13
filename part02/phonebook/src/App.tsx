import React, {useState} from 'react';

import './App.css';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: "883-3423-34" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.currentTarget.value);
  }

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.currentTarget.value);
  }



  const addName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersonToAdd = { name: newName, number};
    setPersons([...persons, newPersonToAdd])
    setNewName('');
  }

  console.log("rendered")

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}


export default App;
