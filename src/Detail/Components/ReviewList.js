import React from 'react';
import Review from "./Review";

const ReviewList = ({
        reviews = [],
        editReview,
        editReviewText,
        setEditReview,
        submitEditReview,
        deleteReview,
        userReviews,
        loggedInUser,
        loggedInUserRole,
        likeReview,
        onChange }) =>
        reviews.map(review =>
                <Review key={review.id}
                        review={review}
                        editReview={editReview}
                        editReviewText={editReviewText}
                        setEditReview={setEditReview}
                        submitEditReview={submitEditReview}
                        deleteReview={deleteReview}
                        userReviews={userReviews}
                        loggedInUser={loggedInUser}
                        loggedInUserRole={loggedInUserRole}
                        likeReview={likeReview}
                        onChange={onChange}/>);

export default ReviewList;
