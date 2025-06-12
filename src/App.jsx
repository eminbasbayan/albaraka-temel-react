import { useContext } from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import { ThemeContext } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';

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
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
