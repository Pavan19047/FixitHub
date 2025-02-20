import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
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

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

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
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          placeholder="Your Name" 
          onChange={handleChange} 
          required 
        />
        <Rating
          count={5}
          value={formData.rating}
          size={30}
          activeColor="#ffd700"
          onChange={handleRatingChange}
        />
        <textarea 
          name="review" 
          value={formData.review} 
          placeholder="Your Review" 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">Submit</button>
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