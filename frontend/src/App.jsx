import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicIssues from "./components/PublicIssues";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import HouseHold from "./components/HouseHoldRepairs";
import ResolvedIssues from "./components/ResolvedIssues";
import HomePage from "./components/HomePage";
import CardsPage from "./components/WorkersList";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/public-issues" element={<PublicIssues />} />
            <Route path="/resolved" element={<ResolvedIssues />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/householdrepairs" element={<HouseHold />} />
            <Route path="/workers/:category" element={<CardsPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
