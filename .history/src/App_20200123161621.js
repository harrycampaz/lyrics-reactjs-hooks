import React, {useState, useEffect, Fragment} from 'react';
import FormLyrics from './components/FormLyrics';

function App(props) {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setinfo] = useState({});



  return (
    <Fragment>
      <FormLyrics/>
    </Fragment>
  );
}

export default App;
