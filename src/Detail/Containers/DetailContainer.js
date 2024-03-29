import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

import '../Detail.css';
import Result from '../Components/Result';
import ReviewButton from '../Components/ReviewButton';
import {getSong, getSongReferents} from '../../Services/GeniusApiService';
import {getSongReviews, likeReview, getUserReviews, deleteReview, editReview, getUser} from '../../Services/BackendService';
import {getCookie, setCookie} from '../../utils';
import LoadingData from "../../Shared/Components/LoadingData";
import {LOGGED_IN_USER, LOGGED_IN_USER_ROLE, REVIEWER} from "../../Constants";
import ReviewList from "../Components/ReviewList";
import IfLoggedIn from "../../Shared/Components/IfLoggedIn";

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editReview: '',
            editReviewText: '',
            id: this.props.match.params.id,
            data: {},
            loggedInUser: getCookie(LOGGED_IN_USER),
            loggedInUserRole: getCookie(LOGGED_IN_USER_ROLE),
            reviews: [],
            userReviews: []
        };
    }

    componentDidMount = () => {
        this.getSongInfo();
        this.getAnnotations();
        this.getUser();
    };

    getUser = () => {
        getUser(this.state.loggedInUser, this.setUser);
    };

    setUser = (user) => {
        this.setState(
            {
            loggedInUserRole: user.role
            },
            () => setCookie(LOGGED_IN_USER_ROLE, user.role, 3)
        )
    };

    getSongInfo = () => {
        getSong(this.state.id, response =>
            this.setState({
                data: response.response.song
            })
        );
        this.getReviews();
        this.getUserReviews();
    };

    deleteReview = (id) => {
        deleteReview(id, this.setReviews);
    };

    getReviews = () => {
        getSongReviews(this.props.match.params.id, this.setReviews);
    };

    getUserReviews = () => {
        const {loggedInUser, loggedInUserRole} = this.state;
        if (loggedInUser && loggedInUserRole === REVIEWER) {
            getUserReviews(loggedInUser, (res) => {
                this.setState({
                    userReviews: res
                })
            });
        }
    };

    likeReview = (id) => {
        likeReview(this.state.loggedInUser, id, this.getReviews);
    };

    onChange = (e) => {
        this.setState({
            editReviewText: e.target.value
        });
    };

    reviewRedirect = () => {
        const {data} = this.state;
        const songName = data.full_title || '';
        this.props.history.push(`/review/${songName}/${this.props.match.params.id}`);
    };

    setEditReview = (id) => {
        this.setState({
            editReview: id
        });
    };

    setReviews = (reviews) => {
        this.setState({
            reviews
        });
    };

    submitEditReview = () => {
        const editedReview = {
            songId: this.props.match.params.id,
            text: this.state.editReviewText,
            id: this.state.editReview
        };
        this.setState(
            {
                editReview: '',
                editReviewText: ''
            },
            () => editReview(this.state.loggedInUser, editedReview,
                () => getSongReviews(this.state.id, this.setReviews))
        );
    };

    getAnnotations = () => {
        getSongReferents(this.state.id, response => {
            let referents;

            referents = response.response.referents.map(ref => ({
                fragment: ref.fragment,
                annotations: ref.annotations.map(ann => {
                    return this.getAllDomText(ann.body.dom);
                })
            }));

            this.setState({
                referents: referents
            });
        })
    };

    getAllDomText = (dom) => {
        let text = " ";

        if(dom.children)
            dom.children.forEach(child => text+= this.getAllDomText(child));
        else
            text+= dom;

        return text;
    };

    isLoading = () => Object.entries(this.state.data).length===0 && this.state.data.constructor===Object;

    render = () => {
        const {
            loggedInUser,
            loggedInUserRole,
            reviews,
            userReviews,
            editReview,
            editReviewText
        } = this.state;

        return (
            <div className='button_container fluid-container'>
                <LoadingData loading={this.isLoading()}>
                    <Result data={this.state.data} referents={this.state.referents}/>
                    <div className={"container"}>
                        <div className={"row"}>
                            <h3 className='t16-details-reviews'>Reviews</h3>
                        </div>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <IfLoggedIn loggedIn={this.state.loggedInUser}
                                            showIfLoggedIn={
                                                loggedInUserRole===REVIEWER ?
                                                    <ReviewButton onClick={this.reviewRedirect}/> :
                                                    <Link to="/login">Log in as a reviewer to review</Link>}
                                            showIfNotLoggedIn={<Link to="/login">Log in to review</Link>}/>
                            </div>
                        </div>
                        <ReviewList
                            reviews={reviews}
                            editReview={editReview}
                            editReviewText={editReviewText}
                            setEditReview={this.setEditReview}
                            submitEditReview={this.submitEditReview}
                            deleteReview={this.deleteReview}
                            userReviews={userReviews}
                            loggedInUser={loggedInUser}
                            loggedInUserRole={loggedInUserRole}
                            likeReview={this.likeReview}
                            onChange={this.onChange}/>
                    </div>
                </LoadingData>
            </div>
        )
    }
}

export default withRouter(DetailContainer);
