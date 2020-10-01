import React, {useState} from 'react';
import ReviewForm from './ReviewForm.jsx'
import Modal from 'react-bootstrap/Modal'

const ModalWindow = (props) => {
  // console.log('props from reviewlist:', props)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <button variant="primary" onClick={handleShow}>
        {/* Launch demo modal */}
        ADD A REVIEW
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Write Your Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>About the [Product Name Here]</h4>
          <ReviewForm meta_data={props.metaData}/>
        </Modal.Body>
        <Modal.Footer>
          * Mandatory Field
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalWindow;



