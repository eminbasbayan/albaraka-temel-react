import React from 'react';

const AdminOrdersPage = () => {
  // Örnek sipariş verisi
  const orders = [
    { id: 101, customer: 'John Doe', total: '$120.00', status: 'Pending', date: '2025-06-12' },
    { id: 102, customer: 'Jane Smith', total: '$340.50', status: 'Shipped', date: '2025-06-10' },
    { id: 103, customer: 'Mike Johnson', total: '$89.99', status: 'Delivered', date: '2025-06-08' },
  ];

  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Orders</span>
          <div className="d-flex">
            <button className="btn btn-outline-primary btn-sm">Logout</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-3">
        <h2>Orders</h2>
        <p>View and manage customer orders.</p>

        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className={`badge bg-${order.status === 'Pending' ? 'warning' : order.status === 'Shipped' ? 'info' : 'success'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-info me-2">View</button>
                    <button className="btn btn-sm btn-danger">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AdminOrdersPage;
