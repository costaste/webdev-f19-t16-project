import React from "react";
import {Link} from "react-router-dom";

const LinkToDetails = (props) => (
    <Link to={"/detail/" + props.itemId}>
        {props.children}
    </Link>
);

export default LinkToDetails;
