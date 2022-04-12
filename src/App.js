import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';

const App= () =>  {
  const [showModal, setShowModal] = useState(false)
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

  const handleModalClose = () => {
    setShowModal(false)
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

      {showModal && <Modal handleModalClose={handleModalClose} >
        <h3>Terms and Conditions</h3>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
      </Modal>}
      
      <div>
        <button onClick={() => {setShowModal(true)}}>Show modal</button>
      </div>

    </div>
  );
}

export default App;
