import React from 'react';

const ReviewControls = (props) =>
        <span className='t16-review-controls'>
            <i className='fa fa-times t16-review-control'
               onClick={() => props.deleteReview(props.id)}/>
            <i className='fa fa-ellipsis-v t16-review-control'
               onClick={() => props.setEditReview(props.id)}/>
            {
                props.editReview===props.id &&
                <i className='fa fa-check t16-review-control'
                   onClick={props.submitEditReview}/>
            }
        </span>;

export default ReviewControls;
