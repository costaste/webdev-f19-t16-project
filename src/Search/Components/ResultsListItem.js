import React from "react";
import LinkToDetails from "./LinkToDetails";
import ArtistInfo from './ArtistInfo';

const ResultsListItem = (props) => {
    return (
        <li className="results-list-item list-unstyled row border-top text-left"
            id={props.item.result.id}>
            <div className="col-1">
                <p>{props.item.type}</p>
            </div>
            <div className="col-2">
                <LinkToDetails itemId={props.item.result.id}>
                    <img className="img-fluid align-content-center"
                         src={props.item.result.header_image_thumbnail_url}
                         alt={"Album art for " + props.item.result.full_title}
                         />
                </LinkToDetails>
            </div>
            <div className="col-5 t16-pad-bottom">
                <LinkToDetails itemId={props.item.result.id}>
                    <p>{props.item.result.title}</p>
                </LinkToDetails>
                <ArtistInfo {...props} />
            </div>
        </li>
    )
};

export default ResultsListItem;
