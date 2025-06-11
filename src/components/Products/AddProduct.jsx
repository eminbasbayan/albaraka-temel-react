import { Fragment, useState } from 'react';
import './AddProduct.css';
import Button from '../UI/Button';

function AddProduct() {
  const [inputData, setInputData] = useState({
    title: '',
    image: '',
    description: '',
    price: 0,
  });

  function handleInputChange({ target: { value, name } }) {
    setInputData({ ...inputData, [name]: value });
  }

  function handleSubmit() {}

  return (
    <Fragment>
      <h2>Add New Product Form</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Title: {inputData.title}</label>
          <input type="text" onChange={handleInputChange} name="title" />
        </div>
        <div className="form-input">
          <label>Image URL: {inputData.image} </label>
          <input type="text" onChange={handleInputChange} name="image" />
        </div>
        <div className="form-input">
          <label>Description: {inputData.description} </label>
          <input type="text" onChange={handleInputChange} name="description" />
        </div>
        <div className="form-input">
          <label>Price: {inputData.price} </label>
          <input type="number" onChange={handleInputChange} name="price" />
        </div>

        <Button color="success">Yeni Ürün Ekle</Button>
      </form>
    </Fragment>
  );
}

export default AddProduct;
