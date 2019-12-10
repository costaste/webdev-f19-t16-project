import React from 'react';
import { withRouter } from 'react-router-dom';

import ReviewComponent from '../Components/ReviewComponent';
import {addReview} from '../../Services/BackendService';
import {getCookie} from '../../utils';

import '../Review.css'


class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: ''
    }
  }

  detailRedirect = () => {
    this.props.history.push(`/detail/${this.props.match.params.id}`);
  }

  submitReview = () => {
    const user = getCookie('loggedInUser');

    const newReview = {
      songId: this.props.match.params.id,
      text: this.state.reviewText
    }

    addReview(user, newReview, this.detailRedirect)
  }

  onChange = (e) => {
    this.setState({
      reviewText: e.target.value
    });
  }

  render = () => {
    return (
      <ReviewComponent
        song={this.props.match.params.song}
        onChange={this.onChange}
        onSubmit={this.submitReview}
      />
    )
  }
}

export default withRouter(ReviewContainer);
