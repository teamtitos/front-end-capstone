import React, {useState} from 'react';
import ReviewForm from './ReviewForm.jsx'

import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
// import ModalFooter from 'react-bootstrap/ModalFooter'
// import Button from 'react-bootstrap/Button'

const ModalWindow = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      {/* <p>this is the modal</p> */}

      <>
      <button variant="primary" onClick={handleShow}>
        {/* Launch demo modal */}
        ADD A REVIEW
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Write Your Review</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ReviewForm />
        </Modal.Body>

      </Modal>
    </>

    </div>
  )
}

export default ModalWindow;



