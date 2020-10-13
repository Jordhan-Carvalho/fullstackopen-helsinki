import React from 'react'

type PersonFormProps = {
  addName: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  number: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonForm({addName, name, number, handleChangeInput}: PersonFormProps) {
  return (
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
  )
}
