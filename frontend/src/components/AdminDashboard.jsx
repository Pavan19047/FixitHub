
import "../styles/AdminDashboard.css"; // Ensure this file is in the same directory or adjust the path

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-section">
        <h2>User Management</h2>
        <p>Manage user accounts and permissions efficiently.</p>
        <button className="dashboard-button">Manage Users</button>
      </div>
      <div className="dashboard-section">
        <h2>Technician and Worker Management</h2>
        <p>Approve and verify worker profiles with ease.</p>
        <button className="dashboard-button">Manage Workers</button>
      </div>
      <div className="dashboard-section">
        <h2>Issue Monitoring</h2>
        <p>View and manage all reported issues in real-time.</p>
        <button className="dashboard-button">View Issues</button>
      </div>
      <div className="dashboard-section">
        <h2>Analytics</h2>
        <p>Gain insights into system performance and usage statistics.</p>
        <button className="dashboard-button">View Analytics</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
