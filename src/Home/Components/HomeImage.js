import React from 'react';
import '../Home.css';

const HomeImage = ({src}) =>
    <img
        src={src}
        alt={src}
        className='t16-home-image'
    />;

export default HomeImage;
