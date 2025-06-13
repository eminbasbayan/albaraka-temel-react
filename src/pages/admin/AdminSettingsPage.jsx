import React from 'react';

const AdminSettingsPage = () => {
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Settings</span>
          <div className="d-flex">
            <button className="btn btn-outline-primary btn-sm">Logout</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-3">
        <h2>Settings</h2>
        <p>Update your admin panel settings below.</p>

        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="siteName" className="form-label">Site Name</label>
            <input type="text" className="form-control" id="siteName" placeholder="My E-Commerce Site" />
          </div>

          <div className="mb-3">
            <label htmlFor="adminEmail" className="form-label">Admin Email</label>
            <input type="email" className="form-control" id="adminEmail" placeholder="admin@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="maintenanceMode" className="form-label">Maintenance Mode</label>
            <select className="form-select" id="maintenanceMode">
              <option value="off">Off</option>
              <option value="on">On</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="timezone" className="form-label">Timezone</label>
            <select className="form-select" id="timezone">
              <option value="UTC">UTC</option>
              <option value="Europe/Istanbul">Europe/Istanbul</option>
              <option value="America/New_York">America/New_York</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </main>
  );
};

export default AdminSettingsPage;
