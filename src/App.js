import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

const App= () =>  {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvent) => [...prevEvent, event])
    setShowModal(false)
  }

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
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
      
      <div>
        <button onClick={() => {setShowModal(true)}}>Add event</button>
      </div>

    </div>
  );
}

export default App;
