import { useContext } from 'react';
import Header from './components/Layout/Header';
import { ThemeContext } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  const { themeMode } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
       {
      path: '/products/:productId',
      element: <ProductDetailsPage />,
    },
  ]);

  return (
    <div
      className="app"
      style={{
        backgroundColor: `${themeMode === 'dark' ? 'black' : 'white'}`,
        color: `${themeMode === 'dark' ? 'white' : 'dark'}`,
      }}
    >
      
      <h1>App Component</h1>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
