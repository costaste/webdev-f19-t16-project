import React from 'react';
import {getUser, getUserReviews} from "../../Services/BackendService";
import ForeignProfile from "../Components/ForeignProfile";
import UserReviews from "../Components/UserReviews";

export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.match.params.username,
            user: {},
            reviews: []
        }
    }

    componentDidMount() {
        getUser(
            this.state.username,
            user => {
                getUserReviews(user.username,
                        revs => this.setState({
                            reviews: revs
                        }));
                this.setState({
                    user: user
                })
            }
        );

    }

    render() {
        return (
            <div className="container">
                <ForeignProfile user={this.state.user}/>
                <UserReviews username={this.state.user.username}
                             reviews={this.state.reviews}/>
            </div>
        )
    }
}
