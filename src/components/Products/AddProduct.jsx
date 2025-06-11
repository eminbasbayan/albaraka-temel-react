import { Fragment, useState } from 'react';
import './AddProduct.css';
import Button from '../UI/Button';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  return (
    <Fragment>
      <h2>Add New Product Form</h2>
      <form className="product-form">
        <div className="form-input">
          <label>Title: {title}</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div className="form-input">
          <label>Image URL: {image} </label>
          <input type="text" onChange={handleImageChange} />
        </div>
        <div className="form-input">
          <label>Description: {description} </label>
          <input type="text" onChange={handleDescriptionChange} />
        </div>
        <div className="form-input">
          <label>Price: {price} </label>
          <input type="number" onChange={handlePriceChange} />
        </div>

        <Button color="success">Yeni Ürün Ekle</Button>
      </form>
    </Fragment>
  );
}

export default AddProduct;
