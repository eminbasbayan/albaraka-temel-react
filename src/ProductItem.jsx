import './ProductItem.css';

function ProductItem({ image, title, price }) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="Image" />
      </div>

      <div className="product-bottom">
        <h3>{title}</h3>
        <span>{price}₺</span>
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
