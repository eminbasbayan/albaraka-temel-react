import { Link, Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar px-3 pt-4 min-vh-100">
          <h4 className="text-white mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
       <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
