import { Fragment } from 'react';
import "./AddProduct.css"
import Button from '../UI/Button';

function AddProduct() {
  return (
    <Fragment>
      <h2>Add New Product Form</h2>
      <form className="product-form">
        <div className="form-input">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Image URL</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Price</label>
          <input type="number" />
        </div>

        <Button color="success">Yeni Ürün Ekle</Button>
      </form>
    </Fragment>
  );
}

export default AddProduct;
