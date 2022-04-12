import './Modal.css'

export default function Modal( {children, handleModalClose} ) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleModalClose}>Close</button>
        </div>
    </div>
  )
}
