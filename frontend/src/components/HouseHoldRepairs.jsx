import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/WorkersList.css"; // Add CSS for styling

const API_URL = "http://localhost:5000/api";

const WorkersList = () => {
  const { category } = useParams(); // Get category from URL
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(`${API_URL}/${category}`);
        setWorkers(response.data);
      } catch (error) {
        console.error("Error fetching workers:", error);
      }
    };

    fetchWorkers();
  }, [category]);

  const handleBookClick = (worker) => {
    setSelectedWorker(worker);
  };

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        workerName: selectedWorker.name,
        name: bookingDetails.name, // Customer Name
        phone: bookingDetails.phone, // Customer's Phone Number (not worker)
        address: bookingDetails.address,
        date: bookingDetails.date,
      });
      alert("Booking confirmed! A message has been sent to the worker.");
      setSelectedWorker(null);
      setBookingDetails({ name: "", phone: "", address: "", date: "" });
    } catch (error) {
      console.error("Error booking worker:", error);
    }
  };

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
              <button
                className="bookButton"
                onClick={() => handleBookClick(worker)}
              >
                Book
              </button>
            </div>
          ))
        ) : (
          <p>No workers available for this category.</p>
        )}
      </div>
      {selectedWorker && (
        <div className="booking-form">
          <h3>Booking for {selectedWorker.name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={bookingDetails.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={bookingDetails.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={bookingDetails.address}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={bookingDetails.date}
              onChange={handleChange}
              required
            />
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkersList;
