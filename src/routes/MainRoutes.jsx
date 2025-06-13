import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

const mainRoutes = [
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
]

export default mainRoutes