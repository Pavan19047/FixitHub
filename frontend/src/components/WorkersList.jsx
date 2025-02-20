import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewForm from "./UsersReview";
import "../styles/WorkersList.css"; // Add CSS for styling

const API_URL = "http://localhost:5000/api";

const WorkersList = () => {
  const navigate = useNavigate();
  const { category } = useParams(); // Get category from URL
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

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
    setIsModalOpen(true);
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
      setIsBookingConfirmed(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsBookingConfirmed(false);
        setSelectedWorker(null);
        setBookingDetails({ name: "", phone: "", address: "", date: "" });
      }, 3000); // Close modal after 3 seconds
    } catch (error) {
      console.error("Error booking worker:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorker(null);
    setBookingDetails({ name: "", phone: "", address: "", date: "" });
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isBookingConfirmed ? (
              <div className="confirmation-message">
                <h3>Booking Confirmed!</h3>
                <p>Message sent to the worker.</p>
              </div>
            ) : (
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
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkersList;
