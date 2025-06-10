import './ProductItem.css';

const productItemCss = {
  backgroundColor: 'red',
  fontSize: "20px",
  color: "blue",
};

function ProductItem() {
  return (
    <div className="product-item" style={productItemCss}>
      <div className="product-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU"
          alt="Image"
        />
      </div>

      <div className="product-bottom">
        <h3>Title</h3>
        <span>50₺</span>
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
