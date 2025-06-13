import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductItem from '../Products/ProductItem';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (toplam, cItem) => toplam + cItem.price * cItem.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Component</h2>
      <div className="products-wrapper">
        {cartItems.map((cItem) => (
          <ProductItem {...cItem} cart removeFromCart={removeFromCart} />
        ))}
      </div>

      <h1>Cart Toplam: {total}₺</h1>
    </div>
  );
};

export default Cart;
