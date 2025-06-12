import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartProvider from './context/CartProvider';
import ThemeProvider from './context/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
