import { useContext } from 'react';
import { ThemeContext } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';

function App() {
  const { themeMode } = useContext(ThemeContext);

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
