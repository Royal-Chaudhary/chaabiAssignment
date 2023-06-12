import { useEffect } from 'react';
// import './CSS/custom.css'
import './CSS/customlite.css'
import ShowWords from './Components/ShowWords';
import stickey from './images/stickey.png';

function App() {
  return (
    <div className="App">
      <h1>Practice Typing - App</h1>
      <ShowWords/>
      <img src={stickey} className='stickey' alt="stickey"></img>
    </div>
  );
}

export default App;
