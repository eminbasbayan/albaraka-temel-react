import { useContext } from 'react';
import Header from './components/Layout/Header';
import { ThemeContext } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{
        backgroundColor: `${themeMode === 'dark' ? 'black' : 'white'}`,
        color: `${themeMode === 'dark' ? 'white' : 'dark'}`,
      }}
    >
      <Header />
      <h1>App Component</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
