import { Fragment, useState } from 'react';
import './AddProduct.css';
import Button from '../UI/Button';
import ProductInput from './ProductInput';

const productInputs = [
  {
    label: 'Title',
    inputName: 'title',
    type: 'text',
  },
  {
    label: 'Image URL',
    inputName: 'image',
    type: 'text',
  },
  {
    label: 'Description',
    inputName: 'description',
    type: 'text',
  },
  {
    label: 'Category',
    inputName: 'category',
    type: 'text',
  },
  {
    label: 'Price',
    inputName: 'price',
    type: 'number',
  },
];

function AddProduct() {
  const [inputData, setInputData] = useState({
    title: '',
    image: '',
    description: '',
    category: '',
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
        {productInputs.map((input) => (
          <ProductInput
            key={input.inputName}
            handleInputChange={handleInputChange}
            label={input.label}
            inputData={inputData[input.inputName]}
            inputName={input.inputName}
            type={input.type}
          />
        ))}

        <Button color="success">Yeni Ürün Ekle</Button>
      </form>
    </Fragment>
  );
}

export default AddProduct;
