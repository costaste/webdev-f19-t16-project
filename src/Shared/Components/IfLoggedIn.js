import React from 'react';

const IfLoggedIn = ({loggedIn = false, showIfLoggedIn = <></>, showIfNotLoggedIn = <></>}) =>
    <>
        {
            loggedIn ? showIfLoggedIn : showIfNotLoggedIn
        }
    </>;

export default IfLoggedIn;
