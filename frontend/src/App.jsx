import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicIssues from "./components/PublicIssues";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import WorkerListPage from "./components/WorkerListPage";
import HouseRepair from "./components/HouseRepair";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/public-issues" element={<PublicIssues />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/house-repair" element={<HouseRepair/>} />
          <Route path="/workers/:workerType" element={<WorkerListPage />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to FixitHub</h1>
                <p>Select a section from the menu.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
