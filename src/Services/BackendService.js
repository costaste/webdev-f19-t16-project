import {getUrl} from './utils';

const URL = getUrl();
const HEADERS = {
    'content-type':'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials':true,
    'Access-Control-Allow-Origin':true
};

export const registerUser = (user, callback) => {
    fetch(`${URL}/api/users`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(callback)
};

export const validateUser = (user, callback) => {
    fetch(`${URL}/api/users/validate`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(callback)
};

export const loginUser = (user, callback) => {
    fetch(`${URL}/api/users/login`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(callback)
};

export const getAllReviews = (callback) => {
    fetch('${URL}/api/reviews', {
        method: 'GET',
        headers: HEADERS
    })
        .then(response => response.json())
        .then(callback)
}

export const getUserReviews = (user, callback) => {
    fetch(`${URL}/api/users/${user}/reviews`, {
        method: 'GET',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(callback)
};

export const getSongReviews = (songId, callback) => {
    fetch(`${URL}/api/songs/${songId}/reviews`, {
        method: 'GET',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(callback)
};

export const addReview = (user, review, callback) => {
    fetch(`${URL}/api/users/${user}/reviews`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(callback)
};

export const likeReview = (user, reviewId, callback) => {
    fetch(`${URL}/api/users/${user}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: HEADERS,
    })
    .then(response => response.json())
    .then(callback)
};

export const addArtistTag = (user, tag, callback) => {
    fetch(`${URL}/api/users/${user}/tags`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(tag)
    })
    .then(response => response.json())
    .then(callback)
};

export const getTagsForArtist = (artistId, callback) => {
    fetch(`${URL}/api/artists/${artistId}/tags`, {
        method: 'GET',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(callback)
};

export const deleteReview = (reviewId, callback) => {
    fetch(`${URL}/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(callback)
};

export const editReview = (user, review, callback) => {
    fetch(`${URL}/api/users/${user}/reviews`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(callback)
};

export const getUser = (user, callback) => {
    fetch(`${URL}/api/users/${user}`, {
        method: 'GET',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(callback)
}

