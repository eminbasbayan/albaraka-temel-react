import { Link, NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar px-3 pt-4 min-vh-100">
          <h4 className="text-white mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-secondary ${isActive && 'active text-white'}`
                }
                to="dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-secondary ${isActive && 'active text-white'}`
                }
                to="users"
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-secondary ${isActive && 'active text-white'}`
                }
                to="orders"
              >
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-secondary ${isActive && 'active text-white'}`
                }
                to="settings"
              >
                Settings
              </NavLink>
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
