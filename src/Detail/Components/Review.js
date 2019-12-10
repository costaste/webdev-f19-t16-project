import React from 'react';
import {READER} from "../../Constants";

const Review = (props) => {
    const likedByUser = (like) => like.username === props.loggedInUser;
    const likedCssClass = props.review.likes.some(likedByUser) ? 't16-liked' : '';
    const isThisReview = (review) => review.id === props.review.id;
    const writtenByUser = props.userReviews.some(isThisReview);

    const reviewControls = (
        <span className='t16-review-controls'>
            <i className='fa fa-times t16-review-control'
               onClick={() => props.deleteReview(props.review.id)}/>
            <i className='fa fa-ellipsis-v t16-review-control'
               onClick={() => props.setEditReview(props.review.id)}/>
            {
                props.editReview===props.review.id &&
                <i className='fa fa-check t16-review-control'
                   onClick={props.submitEditReview}/>
            }
        </span>
    );

    return (
        <div className='t16-review-container row'>
            <span className='t16-review col-10'>
                {
                    props.editReview === props.review.id ?
                        (<textarea
                                onChange={props.onChange}
                                className='t16-edit-review'
                                defaultValue={props.editReviewText || props.review.text}/>) :
                        (<p className='t16-review-text'>{props.review.text}</p>)
                }
                {
                    writtenByUser && reviewControls
                }
            </span>
            <span className={"col-2"}>
                {props.review.likes.length} like{props.review.likes.length === 1 ? "" : "s"}
                {
                    props.loggedInUser && props.loggedInUserRole === READER && (
                        <i
                            className={`fa fa-thumbs-up t16-review-control ${likedCssClass}`}
                            onClick={() => props.likeReview(props.review.id)}
                        />
                    )
                }
            </span>
        </div>
    );
};

export default Review;
