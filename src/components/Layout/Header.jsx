import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from '../../context/ThemeProvider';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { handleThemeMode, themeMode } = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 header">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          MyApp
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Ürünler
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <button onClick={handleThemeMode} className="btn btn-secondary">
                {themeMode === 'dark' ? (
                  <>
                    <i className="bi bi-sun"></i> Light Mode
                  </>
                ) : (
                  <>
                    <i className="bi bi-moon"></i> Dark Mode
                  </>
                )}
              </button>
            </li>
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-outline-primary position-relative"
                onClick={() => navigate('/cart')}
              >
                <i className="bi bi-cart3"></i> Sepet
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                  <span className="visually-hidden">sepet öğeleri</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
