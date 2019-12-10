import React from 'react';
import HomeImage from '../Components/HomeImage';
import PolicyContainer from '../../Privacy/Containers/PolicyContainer';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <HomeImage />
                <PolicyContainer />
            </div>
        );
    }
}
