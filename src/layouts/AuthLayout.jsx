import { Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Header />
      <main className="auth-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
