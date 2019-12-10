import React from 'react';

const UserReviews = (props) =>
    <div className='container'>
        <h1>Your Recent Reviews</h1>

        {
            props.reviews.length > 0 ?
                props.reviews.map(review => {
                    return <p>{review.text}</p>
                }) : <p>No reviews yet! Find a song to write a review.</p>

        }
    </div>;

export default UserReviews;
