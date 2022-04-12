import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';

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
  const subtitle = "All the event in Marioland"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle}/>
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
      <Modal>
        <h3>Terms and Conditions</h3>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <a href='youtube.com'>Click to know more</a>
      </Modal>

    </div>
  );
}

export default App;
