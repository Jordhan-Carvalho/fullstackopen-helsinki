import React, {useState} from 'react';
import './App.css';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';


type HandleFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

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

  const handleChangeInput: HandleFunc = (e) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value});
  }

  const handleSearch: HandleFunc = (e) => {
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
      <Filter handleSearch={handleSearch} searchTerm={searchTerm} />
      <h2>Add a new</h2>
      <PersonForm  addName={addName} name={name} number={number} handleChangeInput={handleChangeInput} />
      <h2>Numbers</h2>
      {persons
      .filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}


export default App;
