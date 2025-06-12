import { useState } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const fullName = 'Emin Başbayan';

  console.log(cartItems);

  function addToCart(product) {
    setCartItems((prevCartItems) => [product, ...prevCartItems]);
    toast.success('Ürün sepete eklendi', {
      position: 'top-center',
    });
  }

  return (
    <CartContext.Provider
      value={{
        fullName,
        addToCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
