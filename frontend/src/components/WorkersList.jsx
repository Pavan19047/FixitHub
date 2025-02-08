import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/WorkersList.css"; // Add CSS for styling

const API_URL = "http://localhost:5000/api";

const WorkersList = () => {
  const { category } = useParams(); // Get category from URL
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
        try {
          const response = await axios.get(`${API_URL}/${category}`); // ✅ Correct API URL
          setWorkers(response.data);
        } catch (error) {
          console.error("Error fetching workers:", error);
        }
      };      

    fetchWorkers();
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} List</h2>
      <div className="worker-container">
        {workers.length > 0 ? (
          workers.map((worker) => (
            <div key={worker._id} className="worker-card">
              <h3>{worker.name}</h3>
              <p>📍 Location: {worker.location}</p>
              <p>⭐ Rating: {worker.rating}</p>
              <p>📞 Contact: {worker.contact}</p>
              <button className="bookButton">Book</button>
            </div>
          ))
        ) : (
          <p>No workers available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default WorkersList;
