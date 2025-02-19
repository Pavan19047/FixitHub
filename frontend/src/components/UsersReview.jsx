import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ReviewForm.css"; // Import the CSS file

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 1,
    review: "",
  });

  useEffect(() => {
    // Fetch existing reviews when the component loads
    axios.get("http://localhost:5000/api/reviews")
      .then(response => setReviews(response.data))
      .catch(error => console.error("Error fetching reviews:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/reviews", formData)
      .then(response => {
        setReviews([...reviews, response.data]); // Update UI
        setFormData({ name: "", rating: 1, review: "" }); // Reset form
      })
      .catch(error => console.error("Error submitting review:", error));
  };

  return (
    <div className="review-container">
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
        <select name="rating" value={formData.rating} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
        </select>
        <textarea name="review" value={formData.review} placeholder="Your Review" onChange={handleChange} required></textarea>
        <button className="report" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
