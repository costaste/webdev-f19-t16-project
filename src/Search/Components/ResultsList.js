import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = (props) => {
    return (
        <div className="results-list">
            <ul>
                {props.results.map(item =>
                    <ResultsListItem
                        key={item.result.id}
                        item={item}
                        loggedInUser={props.loggedInUser}
                        editArtistTag={props.editArtistTag}
                        editingTag={props.editingTag}
                        toggleEditArtistTag={props.toggleEditArtistTag}
                        submitTag={props.submitTag}
                        artistTagMap={props.artistTagMap}
                    />
                )}
            </ul>
        </div>
    )
};

export default ResultsList;