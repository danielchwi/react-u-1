import './App.css';
import { useState } from 'react'

const App= () =>  {
  const [name, setName] = useState('Mario')
  const [events, setEvents] = useState([
    {name: "Hari ulang tahun bapak", id: 1},
    {name: "Akhirnya dapat kerja", id: 2},
    {name: "Beli laptop baru", id: 3}
  ])

  const changeName = () => {
    setName('Luigi')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>Hallo my name is {name}</h1>
      <button onClick={changeName} >click</button>
      {events.map((event)=> (
        <div key={event.id}>
          <p>{event.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
