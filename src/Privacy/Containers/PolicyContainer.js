import React from 'react';
import {Link} from 'react-router-dom';
import '../Privacy.css';

export default class PolicyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    }
  };

  hide = () => {
    this.setState({
      hidden: true
    });
  }

  render = () => {
    if (this.state.hidden) {
      return '';
    }

    return (
      <div className='t16-policy-popup'>
        <span className='t16-policy-popup-content'>
          <span>
            {`Please review our `}
            <Link to='/privacy'>
              Privacy Policy
            </Link>
          </span>
          <i className='fa fa-times t16-popup-close' onClick={this.hide} />
        </span>
      </div>
    )
  }
}