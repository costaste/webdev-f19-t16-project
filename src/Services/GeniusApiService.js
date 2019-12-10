const BASE_URL = 'https://api.genius.com';
const ACCESS_TOKEN = '5A3jmNtHiCmWSmKZYfoM_T5seFaHnZiTwzIxCsHJqF7JXauBIDLocGmo9wFFzLNX';

export const search = (query, callback) => {
  fetch(`${BASE_URL}/search?access_token=${ACCESS_TOKEN}&q=${query}`)
    .then(response => response.json())
    .then(callback)
};

export const getArtist = (artistId, callback) => {
  fetch(`${BASE_URL}/artists/${artistId}?access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(callback)
};

export const getSong = (songId, callback) => {
  fetch(`${BASE_URL}/songs/${songId}?access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(callback)
};

export const getAnnotation = (annotationId, callback) => {
  fetch(`${BASE_URL}/annotations/${annotationId}?access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(callback)
};

export const getSongReferents = (songId, callback) => {
  fetch(`${BASE_URL}/referents/?song_id=${songId}&access_token=${ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(callback)
};
