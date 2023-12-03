import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Guest from './components/Guest';
import List from './components/List';
import ProductsList from './components/ProductsList';
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={() => setIsLoggedIn(true)}>
        Log
      </button>
      {isLoggedIn ? <Welcome /> : <Guest />}
      <List /> */}
      <ProductsList />
    </div>
  );
}

export default App;
