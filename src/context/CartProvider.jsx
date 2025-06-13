import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('sepet')) || []
  );
  const fullName = 'Emin Başbayan';

  function addToCart(product) {
    const findCartItem = cartItems.find((item) => item.id === product.id);

    if (findCartItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === findCartItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems((prevCartItems) => [
        { ...product, quantity: 1 },
        ...prevCartItems,
      ]);
    }

    toast.success('Ürün sepete eklendi', {
      position: 'top-center',
    });
  }

  useEffect(() => {
    localStorage.setItem('sepet', JSON.stringify(cartItems));
  }, [cartItems]);

  function removeFromCart(cartItemId) {
    const filteredCartItems = cartItems.filter(
      (cItem) => cItem.id !== cartItemId
    );

    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        fullName,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
