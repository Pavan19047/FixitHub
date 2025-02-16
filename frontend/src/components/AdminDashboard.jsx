
import "../styles/AdminDashboard.css"; // Ensure this file is in the same directory or adjust the path

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-section">
        <h2>User Management</h2>
        <center>
          <p>Manage user accounts and permissions efficiently.</p>
          <button className="dashboard-button">Manage Users</button>
        </center>
      </div>
      <div className="dashboard-section">
        <h2>Technician and Worker Management</h2>
        <center>
          <p>Approve and verify worker profiles with ease.</p>
          <button className="dashboard-button">Manage Workers</button>
        </center>
      </div>
      <div className="dashboard-section">
        <h2>Issue Monitoring</h2>
        <center>
          <p>View and manage all reported issues in real-time.</p>
          <button className="dashboard-button">View Issues</button>
        </center>
      </div>
      <div className="dashboard-section">
        <h2>Analytics</h2>
        <center>
          <p>Gain insights into system performance and usage statistics.</p>
          <button className="dashboard-button">View Analytics</button>
        </center>
      </div>
    </div>
  );
};

export default AdminDashboard;
