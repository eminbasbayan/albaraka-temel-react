import './ProductItem.css';

function ProductItem() {
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  const price = 250;
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU';

  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={image}
          alt="Image"
        />
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
