// import React, { useState, useEffect } from 'react';
import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
// import sortReviews from './sortReviews.jsx';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
// import './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsCount: 0,
      showAll: false,
      formRating: 0,
      formSummary: '',
      formBody: '',
      formRecommend: false,
      formName: '',
      formEmail: '',
      formPhotos: ['1'],
      formCharacteristics: {},
  }
    this.addReview = this.addReview.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCharacteristicsChange = this.handleCharacteristicsChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
}

  // NOTE: Make sure to reset more reviews button to only show two if you change products

  componentDidMount() {
    this.getAllReviews(this.props.productData.id);
    console.log(this.state.showAll);
    // this.setState({showAll: false}); <--
    setTimeout(() => {
      console.log('should change to false???')
      this.setState({showall: false});
    }, 1000);
  }

   getAllReviews = (id) => {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        this.setState(
          { reviewsCount: result.data.results.length, showAll: false })
      })
      .catch(error => {
        console.error('error getting review data');
      });
  };

  // getReviewMetadata(id) {
  //   axios.get(`http://18.224.37.110/reviews/meta/?product_id=${id}`)
  //   .then(result => {
  //     // reviewMetaData={this.state.reviewMetaData}
  //     this.setState({reviewMetaData: result.data})
  //   })
  //   .catch(error => {
  //     console.error('error from review metadata')
  //   })
  // }

  showAll = () => {
    this.setState({showAll: true})
    console.log(this.state.showAll);
  }

  handleRatingChange(event) {
    this.setState({formRating: event.target.labels})
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

  handleCharacteristicsChange(event) {
    this.setState({formCharacteristics: event.target.value})
  }

  handlePhotoChange(event) {
    this.setState({formCharacteristics: event.target.value})
  }

  submitReview(event) {
    event.preventDefault();
    this.addReview();
  }

  addReview() {
    axios.post("http://18.224.37.110/reviews", {
    product_id: this.state.currentProductId,
    rating: 3,
    summary: this.state.formSummary,
    body: this.state.formBody,
    recommend: this.state.formRecommend,
    name: this.state.formName,
    email: this.state.formEmail,
    photos: this.state.formPhotos,
    characteristics: {"1": 2},
    })
    .then(result => {
      console.log('result from post:', result)
      // this.getAllReviews(this.state.currentProductId)
    })
    .catch(error => {
      console.error('could not post new review')
    })
  }

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
              <Dropdown.Item>Relevant</Dropdown.Item>
              <Dropdown.Item>Helpful</Dropdown.Item>
              <Dropdown.Item>Newest</Dropdown.Item>
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
              name={review.reviewer_name}
              date={review.date}
              summary={review.summary}
              body={review.body}
              helpfulness={review.helpfulness}
              ratings={review.rating}
              photos={review.photos}
              recommend={review.recommend}
              response={review.response}
              //this.props.reviewMetaData
              meta={this.props.reviewMetaData}
            />
        } else if (this.state.showAll) {
          return <ReviewsList
              key={review.review_id}
              name={review.reviewer_name}
              date={review.date}
              summary={review.summary}
              body={review.body}
              helpfulness={review.helpfulness}
              ratings={review.rating}
              photos={review.photos}
              recommend={review.recommend}
              response={review.response}
              meta={this.props.reviewMetaData}
            />
        }
      })
      )}
      </div>

      {this.props.reviewsLength > 2
        ? <Button variant='outline-dark'
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
        newReview={this.submitReview}
      />
    </div>

    )
  }
}

export default Reviews;
