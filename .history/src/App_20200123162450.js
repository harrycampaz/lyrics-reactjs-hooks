import React, {useState, useEffect, Fragment} from 'react';
import FormLyrics from './components/FormLyrics';

function App(props) {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setinfo] = useState({});


  const fetchApiLyrics = () => {

  }

  return (
    <Fragment>
      <FormLyrics fetchApiLyrics= {fetchApiLyrics}/>
    </Fragment>
  );
}

export default App;
