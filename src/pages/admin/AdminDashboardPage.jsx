import React from 'react';

const AdminDashboardPage = () => {
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Dashboard</span>
          <div className="d-flex">
            <button className="btn btn-outline-primary btn-sm">Logout</button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="p-3">
        <h2 className="mb-4">Welcome back, Admin!</h2>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text fs-4">1,245</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Orders Today</h5>
                <p className="card-text fs-4">58</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Pending Orders</h5>
                <p className="card-text fs-4">14</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Support Tickets</h5>
                <p className="card-text fs-4">7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Charts or Reports */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">Sales Overview</div>
              <div className="card-body" style={{ height: '250px' }}>
                <div className="text-muted text-center">[Chart Placeholder]</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">Recent Activity</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User <strong>jane@example.com</strong> registered.</li>
                  <li className="list-group-item">Order #1234 placed.</li>
                  <li className="list-group-item">Admin changed site settings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default AdminDashboardPage;
