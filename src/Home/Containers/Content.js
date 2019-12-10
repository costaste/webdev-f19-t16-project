import React from 'react';
import HomeImage from '../Components/HomeImage';
import PolicyContainer from '../../Privacy/Containers/PolicyContainer';

export default class Content extends React.Component {
    src;

    constructor(props) {
        super(props);

        const imageUrls = [
            'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/03/mixer.jpg',
            'https://images.freecreatives.com/wp-content/uploads/2016/04/HD-DJ-Headphones-Wallpaper.jpg',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapersite.com%2Fimages%2Fwallpapers%2Fheadphones-2560x1440-yellow-background-hd-5k-10170.jpg&f=1&nofb=1',
            'https://hdqwalls.com/wallpapers/microphone-metal.jpg'
        ];

        const randInt = max => Math.floor(Math.random() * Math.floor(max));

        this.src = imageUrls[randInt(imageUrls.length)];
    }

    render() {
        return (
            <div>
                <HomeImage src={this.src}/>
                <h1><span>Welcome</span></h1>
                <PolicyContainer />
            </div>
        );
    }
}
