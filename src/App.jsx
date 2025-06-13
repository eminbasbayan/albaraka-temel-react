import { useContext } from 'react';
import { ThemeContext } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthLayout from './layouts/AuthLayout';

function App() {
  const { themeMode } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'products',
          element: <ProductsPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'products/:productId',
          element: <ProductDetailsPage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return (
    <div
      className="app"
      style={{
        backgroundColor: `${themeMode === 'dark' ? 'black' : 'white'}`,
        color: `${themeMode === 'dark' ? 'white' : 'dark'}`,
        paddingTop: '58px',
      }}
    >
      <h1>App Component</h1>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
