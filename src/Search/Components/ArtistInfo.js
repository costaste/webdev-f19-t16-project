import React from 'react';

const ArtistTag = ({text}) => {
  return (
    <span className='t16-artist-tag'>
      {text}
    </span>
  );
};

const ArtistTags = (props) => {
  const tagsForArtist = props.artistTagMap[props.item.result.primary_artist.id] || [];

  return (
    <span>
      Artist tags:
    {
      tagsForArtist.map((tag, idx) => {
        return <ArtistTag text={tag.text} key={`${tag.artistId}-${tag.text}-${idx}`}/>
      })
    }
    </span>
  )
};

const ArtistInfo = (props) => {
  const editTagInput = props.editingTag === props.item.result.id
  ? (
      <span>
          <input onChange={props.editArtistTag} />
          <button onClick={props.submitTag} className='btn btn-outline'>
              <i className='fa fa-check' />
          </button>
      </span>
  )
  : '';

  const tagButton = props.loggedInUser
  ? (
      <React.Fragment>
          <i
              className='fa fa-tag t16-tag-btn'
              onClick={() => props.toggleEditArtistTag(props.item.result.id, props.item.result.primary_artist.id)}
          />
          {editTagInput}
      </React.Fragment>
  )
  : '';

  return (
    <React.Fragment>
      <span className='t16-artist'>
          <p>
              {props.item.result.primary_artist.name}
          </p>
          {tagButton}
      </span>
      <ArtistTags {...props}/>
    </React.Fragment>
  );
};

export default ArtistInfo;
