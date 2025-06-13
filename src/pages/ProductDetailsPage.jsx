import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

 if(!product) return;

  return (
    <div className="container py-5">
      <Header />
      <div className="row g-4">
        {/* Ürün görseli */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>

        {/* Ürün detayları */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted mb-1">{product.category}</p>
          <h4 className="text-success mb-3">${product.price.toFixed(2)}</h4>

          <div className="mb-3">
            <span className="badge bg-warning text-dark me-2">
              ⭐ {product.rating.rate}
            </span>
            <small className="text-muted">({product.rating.count} yorum)</small>
          </div>

          <p>{product.description}</p>

          <button className="btn btn-primary btn-lg mt-3">
            <i className="bi bi-cart-plus"></i> Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
