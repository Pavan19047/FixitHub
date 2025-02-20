import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating-stars-component";
import "../styles/ReviewForm.css"; // Import the CSS file

const ReviewForm = () => {
  const navigate = useNavigate();
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

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Validation: Prevent empty submissions
      if (!formData.name.trim() || !formData.review.trim() || formData.rating === 0) {
        alert("Please fill in all fields before submitting.");
        return;
      }
    
      axios.post("http://localhost:5000/api/reviews", formData)
        .then(response => {
          setReviews([...reviews, response.data]); // Update the UI with the new review
          setFormData({ name: "", rating: 1, review: "" }); // Reset form
    
          navigate("/"); // ✅ Navigate ONLY after successful submission
        })
        .catch(error => console.error("Error submitting review:", error));
    };

  return (
    <div className="review-container">
  <h2>Submit a Review</h2>
  <form className="review-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Your Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />

    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ color: star <= formData.rating ? "#FFD700" : "#ccc" }}
          onClick={() => setFormData({ ...formData, rating: star })}
        >
          ★
        </span>
      ))}
    </div>

    <textarea
      placeholder="Your Review"
      value={formData.review}
      onChange={(e) => setFormData({ ...formData, review: e.target.value })}
    />

    <button className="submit-btn" type="submit">
      SUBMIT
    </button>
  </form>
  <h2>Reviews</h2>
      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>
            <strong>{rev.name}</strong> 
            <Rating count={5} value={rev.rating} size={20} edit={false} activeColor="#ffd700" />
            <p>{rev.review}</p>
          </li>
        ))}
      </ul>
</div>

  );
};

export default ReviewForm;
