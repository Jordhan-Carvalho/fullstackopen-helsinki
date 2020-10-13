import React from 'react'

type HandleFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

type FilterProp = {
  searchTerm: string;
  handleSearch: HandleFunc;
}

export default function Filter({searchTerm, handleSearch}: FilterProp) {
  return (
    <div>filter shown with <input name="search" value={searchTerm} onChange={handleSearch} /></div>
  )
}
