import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Guest from './components/Guest';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsLoggedIn(true)}>
        Log
      </button>
      {isLoggedIn ? <Welcome /> : <Guest />}
    </div>
  );
}

export default App;
