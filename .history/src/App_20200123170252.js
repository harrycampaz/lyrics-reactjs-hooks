import React, {useState, useEffect, Fragment} from 'react';
import FormLyrics from './components/FormLyrics';
import axios from 'axios';
import Song from './components/Song';

function App(props) {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setInfo] = useState({});


  const fetchApiLyrics =  async search => {

    const {artist, song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  
    
    const result = await axios(url)

    setArtist(artist);
    setLyric(result.data.lyrics)
    
  }

  const fetchApiArtist =  async search => {

  
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
   
    
    const result = await axios(url)

    setInfo(result.data.artists[0]);
    console.log('Consulta Api letras', info);

    //setArtist(result.data.lyrics)
  }

  useEffect(() => {

  console.log('Data Date');
  
  fetchApiArtist()
  }, [artist])

  return (
    <Fragment>
      <FormLyrics fetchApiLyrics= {fetchApiLyrics}/>

<div className="container mt-5">
  <div className="row">
    
    <div className="col-md-6">

    </div>

    <div className="col-md-6">
      <Song lyric={lyric} />
    </div>
  </div>
</div>

    </Fragment>
  );
}

export default App;
