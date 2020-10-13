import React, {useState} from 'react';

import './App.css';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({number: "", name: ""})
  const {name, number} = formData;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value});
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }
  
  const addName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }
    const newPersonToAdd = { name, number};
    setPersons([...persons, newPersonToAdd])
    // setformData;
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input name="search" value={searchTerm} onChange={handleSearch} /></div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div>
          number: <input name="number" value={number} onChange={handleChangeInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
      .filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}


export default App;
