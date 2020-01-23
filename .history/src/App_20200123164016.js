import React, {useState, useEffect, Fragment} from 'react';
import FormLyrics from './components/FormLyrics';
import axios from 'axios';
import Song from './components/Song';

function App(props) {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setinfo] = useState({});


  const fetchApiLyrics =  async search => {

    const {artist, song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    console.log('Consulta Api letras', search);
    
    const result = await axios(url)

    setLyric(result.data.lyrics)
    

  }

  return (
    <Fragment>
      <FormLyrics fetchApiLyrics= {fetchApiLyrics}/>

<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <Song lyric={lyric} />
    </div>
    <div className="col-md-6">

    </div>
  </div>
</div>

    </Fragment>
  );
}

export default App;
