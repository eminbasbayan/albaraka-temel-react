import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AddProduct from './AddProduct';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import ProductItem from './ProductItem';

import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

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

  // fetchProducts();

  // component DOM'a ilk yüklendiğinde çalışacak.
  useEffect(() => {
    fetchProducts();
  }, []);

  // component DOM'a ilk yüklendiğinde ve dep. array'e göre çalışacak.
  // useEffect(() => {
  //   if (isShowModal === true) {
  //     fetchProducts();
  //   }
  // }, [isShowModal]);

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
    toast.success('Ürün başarıyla silindi!', {
      position: 'bottom-center',
    });
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
      <AddProduct setProducts={setProducts} setIsShowModal={setIsShowModal} />
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
      {isShowModal && (
        <Modal
          title={'Form Inputları Boş Geçilemez!'}
          description={'Lütfen inputları doldurunuz!'}
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
}

export default Products;
