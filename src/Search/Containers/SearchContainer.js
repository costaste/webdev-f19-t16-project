import React from "react";
import SearchField from "../Components/SearchField";
import ResultsList from "../Components/ResultsList";
import {search} from '../../Services/GeniusApiService';
import {addArtistTag, getTagsForArtist} from '../../Services/BackendService';
import {getCookie} from '../../utils';
import '../Search.css';
import LoadingData from "../../Shared/Components/LoadingData";
import {CRITERIA, LOGGED_IN_USER} from "../../Constants";

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artistTagString: '',
            artistTagMap: {},
            displayedArtists: [],
            editingTag: '',
            editingTagArtist: '',
            searchString: '',
            results: [],
            loading: false,
            loggedInUser: getCookie(LOGGED_IN_USER)
        };
    }

    changedSearchString = (newString) => {
        this.setState({
            searchString: newString
        });
    };

    editArtistTag = (e) => {
        this.setState({
            artistTagString: e.target.value
        });
    };

    toggleEditArtistTag = (id, artist) => {
        this.setState({
            editingTag: id,
            editingTagArtist: artist
        });
    };

    submitArtistTag = () => {
        const newTag = {
            text: this.state.artistTagString,
            artistId: this.state.editingTagArtist
        };

        addArtistTag(
            this.state.loggedInUser,
            newTag,
            this.setState({
                editingTag: '',
                editingTagArtist: ''
            })
        );
    };

    getArtistTags = () => {
        const {displayedArtists} = this.state;
        displayedArtists.forEach((artist) => {
            getTagsForArtist(artist, this.updateArtistTagMap);
        });
    };

    updateArtistTagMap = (tags) => {
        if (Array.isArray(tags) && tags.length !== 0) {
            const artistId = tags[0].artistId;
            this.setState((prevState) => ({
                artistTagMap: {
                    ...prevState.artistTagMap,
                    [artistId]: tags
                }
            }));
        }
    };

    getResults = (searchString) => {
        this.setState({
                loading: true,
                editingTag: '',
                editingTagArtist: ''
            },
            () => search(searchString, this.setResults)
        );
    };

    setResults = (results) => {
        let resultsList = results && results.response
            && results.response.hits && Array.isArray(results.response.hits) ?
            results.response.hits : [];

        const artistList = [];
        resultsList.forEach((r) => {
            const artistId = (r.result && r.result.primary_artist) ? r.result.primary_artist.id : null;
            if (artistId && !artistList.includes(artistId)) {
                artistList.push(artistId);
            }
        });
        this.setState({
            loading: false,
            results: resultsList,
            displayedArtists: artistList
        }, this.getArtistTags);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push(`?${CRITERIA}=${this.state.searchString}`, {});
        this.getResults(this.state.searchString)
    };

    componentDidMount = () => {
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get(CRITERIA);
        if(query) this.getResults(query);
    };

    render() {
        return (
            <div className='container'>
                <h1>Search</h1>
                <SearchField
                    searchString={this.state.searchString}
                    changedSearchString={this.changedSearchString}
                    handleSubmit={this.handleSubmit}
                />
                <LoadingData loading={this.state.loading}>
                    <ResultsList
                         results={this.state.results}
                         loggedInUser={this.state.loggedInUser}
                         toggleEditArtistTag={this.toggleEditArtistTag}
                         editArtistTag={this.editArtistTag}
                         editingTag={this.state.editingTag}
                         submitTag={this.submitArtistTag}
                         artistTagMap={this.state.artistTagMap}/>
                </LoadingData>
            </div>
        )
    }
}
