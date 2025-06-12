import { useState } from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Button from './components/UI/Button';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Header cartItems={cartItems} />
      <h1>App Component</h1>
      <Products setCartItems={setCartItems} />
    </div>
  );
}

export default App;
