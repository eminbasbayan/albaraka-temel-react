import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductItem.css';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductItem({ id, image, title, price, description, onDeleteItem }) {
  const product = { id, image, title, price, description };
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="Image" />
      </div>

      <div className="product-bottom">
        <h3
          className="product-title"
          onClick={() => navigate(`/products/${id}`)}
        >
          {title}
        </h3>
        <p className="product-description">{description}</p>
        <span>{price}₺</span>

        <Button color="primary" onClick={() => addToCart(product)}>
          Sepete Ekle
        </Button>
        <Button color="danger" onClick={() => onDeleteItem(id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;

/*

1- Ürün Görseli
2- Ürün Fiyatı
3- Ürün Title

*/
