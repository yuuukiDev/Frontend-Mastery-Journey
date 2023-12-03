import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Button from './components/Button';
import Input from './components/input';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      {/* <Welcome name="Mohamed" country="EGYPT"/>
      <Product product_name="RTX 4090" product_description="Powerful GPU for Gaming" product_price="2000$" product_release_date="2023"/>
      <Product product_name="RTX 4080" product_description="Powerful GPU for Gaming" product_price="1200$" product_release_date="2022"/>
      <Product product_name="RTX 4070" product_description="Powerful GPU for Gaming" product_price="599$" product_release_date="2023"/>
      <Button title="btn"/>
      <Input /> */}
      <Form />
    </div>
  );
}

export default App;
