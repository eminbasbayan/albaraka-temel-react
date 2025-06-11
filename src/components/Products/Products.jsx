import Button from '../UI/Button';
import ProductItem from './ProductItem';

import { productsData } from '../../data';
import './Products.css';
import { useState } from 'react';

// https://fakestoreapi.com/products

function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
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
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
