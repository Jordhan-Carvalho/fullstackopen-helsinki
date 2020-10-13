import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';


type HandleFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;
interface UserData {
  id: number;
  name: string;
  number: string;
}

function App() {
  const [ persons, setPersons ] = useState<UserData[]>([]) 

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const resp = await axios.get("http://localhost:3001/persons");
    const { data }: AxiosResponse<[UserData]> = resp;
    setPersons([...data])
  }
  

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
    const newPersonToAdd: UserData = { name, number, id: Math.random()};
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
