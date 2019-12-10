import React from 'react';
import {READER} from "../../Constants";
import {Link} from "react-router-dom";
import ReviewControls from "./ReviewControls";

const Review = (props) => {
    const likedByUser = (like) => like.username === props.loggedInUser;
    const likedCssClass = props.review.likes.some(likedByUser) ? 't16-liked' : '';
    const isThisReview = (review) => review.id === props.review.id;
    const writtenByUser = props.userReviews.some(isThisReview);

    return (
        <div className='t16-review-container row'>
            <span className='t16-review col-10'>
                {
                    props.editReview === props.review.id ?
                        <textarea
                                onChange={props.onChange}
                                className='t16-edit-review'
                                defaultValue={props.editReviewText || props.review.text}/> :
                        <p className='t16-review-text'>{props.review.text}</p>
                }
                {
                    writtenByUser &&
                    <ReviewControls
                        id={props.review.id}
                        deleteReview={props.deleteReview}
                        setEditReview={props.setEditReview}
                        submitEditReview={props.submitEditReview}
                        editReview={props.editReview}/>
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
                }<br/>
                {props.review.likes.length > 0 ? "Liked by " : ""}
                {props.review.likes.map((like, i) => {
                    return <span key={like.username}>
                        {(i > 0 ? ", " : "")}
                        <Link to={`/profile/${like.username}`}>{like.username}</Link>
                    </span>
                })}
            </span>
        </div>
    );
};

export default Review;
