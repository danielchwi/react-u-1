import style from './EventList.module.css'

export default function EventList( {events, handleClick} ) {
  return (
    <div>
        {events.map((event) => (
            <div className={style.card} key={event.id}>
                <p>{event.name}</p>
                <button onClick={() => handleClick(event.id)}>delete event</button>
            </div>
        ))}
    </div>
  )
}
