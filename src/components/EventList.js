import React from 'react'
export default function EventList( {events, handleClick} ) {

  return (
    <div>
        {events.map((event) => (
            <React.Fragment key={event.id}>
                <p>{event.name}</p>
                <button onClick={() => handleClick(event.id)}>delete event</button>
            </React.Fragment>
        ))}
    </div>
  )
}
