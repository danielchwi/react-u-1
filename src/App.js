import './App.css';
import { useState } from 'react'
import Title from './components/Title';

const App= () =>  {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {name: "Hari ulang tahun bapak", id: 1},
    {name: "Akhirnya dapat kerja", id: 2},
    {name: "Beli laptop baru", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event)=> {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Title/>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Event</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Event</button>
        </div>
      )}
      {showEvents && events.map((event)=> (
        <div key={event.id}>
          <p>{event.name}</p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
