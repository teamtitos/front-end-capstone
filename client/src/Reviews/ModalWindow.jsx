import React, {useState} from 'react';
import ReviewForm from './ReviewForm.jsx'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

const ModalWindow = (props) => {
  console.log('props from reviewlist:', props)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div id='modal'>
      <Button variant="outline-dark" onClick={handleShow}>ADD A REVIEW +</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Write Your Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4>About the {props.currentProduct}</h4>
          <ReviewForm
          meta_data={props.metadata}

          submitRatingValue={props.ratingValue}
          submitSummaryValue={props.summaryValue}
          submitBodyValue={props.bodyValue}
          sumbitRecommendValue={props.recommendValue}
          submitNameValue={props.nameValue}
          sumbitEmailValue={props.emailValue}
          submitPhotosValue={props.photoValue}
          submitCharacteristicsValue={props.characteristicsValue}

          submitRating={props.ratingChange}
          submitSummary={props.summaryChange}
          submitBody={props.bodyChange}
          sumbitRecommend={props.recommendChange}
          submitName={props.nameChange}
          sumbitEmail={props.emailChange}
          submitPhotos={props.photoChange}
          submitCharacteristics={props.characteristicsChange}
          sumbitForm={props.newReview}
          />
          <Modal.Footer>
            * mandatory field
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalWindow;



