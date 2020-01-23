import React, {useState, useEffect, Fragment} from 'react';
import FormLyrics from './components/FormLyrics';
import axios from 'axios';

function App(props) {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setinfo] = useState({});


  const fetchApiLyrics =  async search => {

    const {artist, song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    console.log('Consulta Api letras', search);
    
    const result = await axios(url)

    console.log(result);
    

  }

  return (
    <Fragment>
      <FormLyrics fetchApiLyrics= {fetchApiLyrics}/>
    </Fragment>
  );
}

export default App;
