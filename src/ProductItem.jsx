import './ProductItem.css';

function ProductItem({ image, title, price, description }) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="Image" />
      </div>

      <div className="product-bottom">
        <h3 className='product-title'>{title}</h3>
        <p className='product-description'>{description}</p>
        <span>{price}₺</span>

        <button>Sepete Ekle</button>
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
