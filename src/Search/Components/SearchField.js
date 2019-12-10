import React from "react";

const SearchField = (props) => {
    return (
        <div className="SearchBox container row">
            <form className="col-sm-12">
                <input
                    id="search-field"
                    className="col-sm-9 form-control d-inline-block"
                    type="text"
                    placeholder="Song, Artist, or Lyric"
                    value={props.searchString}
                    onChange={e => props.changedSearchString(e.target.value)}
                />
                <button
                    className="btn btn-primary col-sm-1 d-inline-block"
                    onClick={props.handleSubmit}
                >
                    Go
                </button>
            </form>
        </div>
    )
};

export default SearchField;
