import ProductItem from './ProductItem';
import { productsData } from './data';
import './Products.css';

function Products() {
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  const price = 250;
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU';

  return (
    <div className="products">
      <h1>Products Component</h1>
      <div className="products-wrapper">
        <ProductItem
          image={productsData[0].image}
          title={productsData[0].title}
          price={productsData[0].price}
        />
        <ProductItem
          image={productsData[1].image}
          title={productsData[1].title}
          price={productsData[1].price}
        />
        <ProductItem
          image={productsData[2].image}
          title={productsData[2].title}
          price={productsData[2].price}
        />
      </div>
    </div>
  );
}

export default Products;
