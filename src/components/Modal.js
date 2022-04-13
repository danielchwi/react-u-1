import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal( {children, handleModalClose, isSalesModal} ) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center"
        }}>
            {children}
            <button onClick={handleModalClose} className={isSalesModal ? "sales-btn" : ""}>Close</button>
        </div>
    </div>
  ), document.body)
}
