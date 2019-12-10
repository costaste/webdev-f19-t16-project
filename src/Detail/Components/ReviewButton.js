import React from 'react';

const ReviewButton = (props) => {
    return (
        <button
            className='btn btn-primary t16-review-btn'
            onClick={props.onClick}
        >
            Review
        </button>
    )
};

export default ReviewButton;
