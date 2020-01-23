import React, { Fragment } from 'react';

function Song({lyric}) {
    return (
        <Fragment>
            <h2>Song Lyrics</h2>
    <p className="letra">{lyric}</p>
        </Fragment>
    );
}

export default Song;