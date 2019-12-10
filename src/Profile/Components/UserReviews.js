import React from 'react';

const UserReviews = ({reviews = [], username}) =>
    <div className='container t16-content'>
        <br/><h1>{username}'s recent reviews</h1><br/>
        {
            reviews.length > 0 ?
                reviews.map(review => <p key={review.text} className="t16-review">{review.text}</p>) :
                <p>No reviews yet!</p>
        }
    </div>;

export default UserReviews;
