import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { apiURL } from '../api';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      formRating: 0,
      formSummary: '',
      formBody: '',
      formRecommend: false,
      formName: '',
      formEmail: '',
      formPhotos: ['0'],
      formCharacteristics: {}
    }

    this.addReview = this.addReview.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCharacteristicsChange = this.handleCharacteristicsChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
 }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.allReviews !== prevProps.allReviews) {
      this.setState({showAll: false});
    }
  }

  addReview() {
    axios.post(`${apiURL}/reviews`, {
      product_id: this.state.currentProductId,
      rating: 3,
      summary: this.state.formSummary,
      body: this.state.formBody,
      recommend: this.state.formRecommend === "No" ? false : true,
      name: this.state.formName,
      email: this.state.formEmail,
      photos: this.state.formPhotos,
      characteristics: this.state.formCharacteristics,
    }
    // .then(result => {
    //     console.log('result from post:', result)
    //   })
    //   .catch(error => {
    //     console.error('could not post new review')
    //   })


    // console.log('formData:', formData)
    // return;

    // axios.post("http://18.224.37.110/reviews", {
    //   // product_id: this.state.currentProductId,
    //   // rating: this.state.formRating,
    //   // summary: this.state.formSummary,
    //   // body: this.state.formBody,
    //   // recommend: this.state.formRecommend,
    //   // name: this.state.formName,
    //   // email: this.state.formEmail,
    //   // photos: this.state.formPhotos,
    //   // characteristics: {"1": 2},
    // })
    // .then(result => {
    //   console.log('result from post:', result)
    // })
    // .catch(error => {
    //   console.error('could not post new review')
    // })
  }

  showAll = () => {
    this.setState({showAll: true})
  }

  handleRatingChange(value) {
    this.setState({formRating: value });
  }

  handleSummaryChange(event) {
    this.setState({formSummary: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({formBody: event.target.value})
  }

  handleRecommendChange(event) {
    this.setState({formRecommend: event.target.value})
  }

  handleNameChange(event) {
    this.setState({formName: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({formEmail: event.target.value})
  }

  handleCharacteristicsChange(characteristic, number) {
    let formChar = this.state.formCharacteristics;
    formChar[characteristic] = number;
    this.setState({formCharacteristics: formChar});
  }

  handlePhotoChange(event) {
    this.setState({formPhotos: event.target.value})
  }

  // submitReview(event) {
  //   event.preventDefault();
  //   this.addReview();
  // }

  render() {
    return (
    <div id="reviewsContainer">
      <Row>
        <Col>
          <strong>
            {this.props.reviewsLength
            ? this.props.reviewsLength
            : '0'
            } reviews, Sort on relevance</strong>
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic" />
            <Dropdown.Menu>
              <Dropdown.Item variant="link">Relevant</Dropdown.Item>
              <Dropdown.Item variant="link">Helpful</Dropdown.Item>
              <Dropdown.Item variant="link">Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <br></br>
      <div>
      {!this.props.allReviews ? (
        <p>Loading</p>
      ) : (
      this.props.allReviews.map((review, index) => {
        if (!this.state.showAll && index < 2) {
          return <ReviewsList
              key={review.review_id}
              reviewData={review}
              meta={this.props.reviewMetaData}
              help={this.props.helpful}
              reviewId={review.review_id}
              badReview={this.props.makeReport}

            />
        } else if (this.state.showAll) {
          return <ReviewsList
              key={review.review_id}
              reviewData={review}
              meta={this.props.reviewMetaData}
              help={this.props.helpful}
              reviewId={review.review_id}
              badReview={this.props.makeReport}

              />
        }
      })
      )}
      </div>

      {this.props.reviewsLength > 2
        ? <Button variant='outline-dark' size="medium"
           onClick={this.showAll}>MORE REVIEWS</Button>
        : ''
      }
      <ModalWindow
        metadata={this.props.reviewMetaData}
        currentProduct={this.props.productName}

        ratingValue={this.state.formRating}
        summaryValue={this.state.formSummary}
        bodyValue={this.state.formBody}
        recommendValue={this.state.formRecommend}
        nameValue={this.state.formName}
        emailValue={this.state.formEmail}
        photoValue={this.state.formPhoto}
        characteristicsValue={this.state.formCharacteristics}

        ratingChange={this.handleRatingChange}
        summaryChange={this.handleSummaryChange}
        bodyChange={this.handleBodyChange}
        recommendChange={this.handleRecommendChange}
        nameChange={this.handleNameChange}
        emailChange={this.handleEmailChange}
        photoChange={this.handlePhotoChange}
        characteristicsChange={this.handleCharacteristicsChange}

        addReview={this.addReview}
      />
    </div>

    )
  }
}
}

export default Reviews;
