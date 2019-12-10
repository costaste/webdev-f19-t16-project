import React from 'react';

const ReviewComponent = (props) => {
  return (
    <div className='container'>
      <h1>{`Reviewing: ${props.song}`}</h1>
      <div className='t16-review-inputs'>
        <textarea
          className='form-control t16-review-input'
          onChange={props.onChange}
        />
        <button className='btn btn-primary t16-review-input' onClick={props.onSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewComponent;
