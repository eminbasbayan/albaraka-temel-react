import { useState } from 'react';
import Button from '../UI/Button';
import ProductItem from './ProductItem';

import { productsData } from '../../data';
import './Products.css';

// https://fakestoreapi.com/products

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    setProducts([]);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleTitleChange(productId) {
    const newProducts = products.map((item) => {
      if (item.id === productId) {
        const newItem = { ...item, title: 'Deneme Title' };

        return newItem;
      }
      return item;
    });

    setProducts(newProducts);
  }

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

  return (
    <div className="products">
      <h1>Products Component</h1>
      <br />
      <Button color="success" onClick={fetchProducts}>
        Fetch Products
      </Button>
      <br />
      <br />
      <div className="products-wrapper">
        {isLoading && <b>Loading...</b>}
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              onDeleteItem={handleDeleteItem}
              onTitleChange={handleTitleChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
