import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal( {children, handleModalClose} ) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleModalClose}>Close</button>
        </div>
    </div>
  ), document.body)
}
