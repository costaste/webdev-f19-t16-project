import React from 'react';
import '../Home.css';

const HomeImage = () => {
    const imageUrls = [
        'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/03/mixer.jpg',
        'https://images.freecreatives.com/wp-content/uploads/2016/04/HD-DJ-Headphones-Wallpaper.jpg',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapersite.com%2Fimages%2Fwallpapers%2Fheadphones-2560x1440-yellow-background-hd-5k-10170.jpg&f=1&nofb=1',
        'https://hdqwalls.com/wallpapers/microphone-metal.jpg'
    ];

    const randInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var background = {backgroundSize : 'cover'};

    const src = imageUrls[randInt(imageUrls.length)];
    return (
        <div>
            <img
                src={src}
                style={background}
                className='t16-home-image'
                alt={src}
            />
            <h1><span>Welcome</span></h1>
        </div>
    )
}

export default HomeImage;
