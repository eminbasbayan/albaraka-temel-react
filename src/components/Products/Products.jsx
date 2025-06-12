import { act, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';

import AddProduct from './AddProduct';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import ProductItem from './ProductItem';

import './Products.css';

function reducerFunction(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.data, isLoading: false };
    case 'ADD_NEW_PRODUCT':
      return { ...state, products: [action.product, ...state.products] };
    case 'DELETE_PRODUCT':

      const filteredProducts = state.products.filter(
        (item) => item.id !== action.productId
      );

      return { ...state, products: filteredProducts };
    case 'SHOW_MODAL':
      return { ...state, isShowModal: true };

    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };

    default:
      return state;
  }
}

const initialState = {
  products: [],
  isLoading: true,
  isShowModal: false,
};

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch({ type: 'SET_PRODUCTS', data });
    } catch (err) {
      console.log(err);
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


  function handleDeleteItem(productId) {
   dispatch({type: "DELETE_PRODUCT", productId})
    // setProducts(filteredProducts);
    toast.success('Ürün başarıyla silindi!', {
      position: 'bottom-center',
    });
  }

  function addNewProduct(product) {
    dispatch({ type: 'ADD_NEW_PRODUCT', product });
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
      <AddProduct
        addNewProduct={addNewProduct}
        setIsShowModal={() => dispatch({ type: 'SHOW_MODAL' })}
      />
      <div className="products-wrapper">
        {state.isLoading && <b>Loading...</b>}
        {state.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              onDeleteItem={handleDeleteItem}
            />
          );
        })}
      </div>
      {state.isShowModal && (
        <Modal
          title={'Form Inputları Boş Geçilemez!'}
          description={'Lütfen inputları doldurunuz!'}
          setIsShowModal={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}

export default Products;
