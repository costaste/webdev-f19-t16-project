import React from 'react';

const Result = ({data, referents}) =>
    <div id="result" className="container">
        <div className="row">
            <img src={data.header_image_thumbnail_url} alt={`art for ${data.full_title}`} className="col-4"/>
            <h1 className="col-8">{Object.keys(data) ? data.full_title : ""}</h1>
        </div>

        <h4>Annotations</h4>
        {
            referents && referents.map(ref =>
                    <p key={ref.fragment}>
                        <b>{ref.fragment}</b><br/>
                        {ref.annotations[0]}
                    </p>
            )
        }
    </div>;
export default Result;
