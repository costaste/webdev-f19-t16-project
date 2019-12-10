import React from 'react';

const LoadingData = ({loading, children}) =>
    <>
        { loading ? <i className='fa fa-spin fa-spinner'/> : children }
    </>;
export default LoadingData;
