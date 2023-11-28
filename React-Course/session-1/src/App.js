import './App.css';
import Greeting from './components/Greeting';

function App() {
  const name = "Mohamed";
  return (
    <div className="App">
        <h1>Hello World</h1>
        <Greeting name = {name} />
      </div>

  );
}

export default App;
