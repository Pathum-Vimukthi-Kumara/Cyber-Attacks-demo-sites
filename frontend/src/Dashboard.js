import React from 'react';

function Dashboard({ user }) {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="alert alert-success">Welcome, {user?.username || 'Admin'}!</div>
      <p>This is a protected admin dashboard. Only visible to the admin user.</p>
      {/* Add more admin features here */}
    </div>
  );
}

export default Dashboard;
