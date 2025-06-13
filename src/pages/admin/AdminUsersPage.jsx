import React from 'react';

const AdminUsersPage = () => {
  // Örnek kullanıcı verisi
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor' },
  ];

  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Users</span>
          <div className="d-flex">
            <button className="btn btn-outline-primary btn-sm">Logout</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-3">
        <h2>Users</h2>
        <p>Manage all registered users from the list below.</p>

        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-info me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
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

export default AdminUsersPage;
