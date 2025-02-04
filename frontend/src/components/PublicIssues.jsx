import { useState, useEffect } from "react";
import "../styles/PublicIssues.css";
import axios from "axios";

const PublicIssues = () => {
  const [formData, setFormData] = useState({
    description: "",
    issueType: "potholes",
    location: "",
    file: null,
  });

  const [issues, setIssues] = useState([]);
  const [votedIssues, setVotedIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/issues")
      .then((res) => setIssues(res.data))
      .catch((err) => console.error("Error fetching issues:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/issues", formData);
      setIssues([...issues, res.data]);
      setFormData({
        description: "",
        issueType: "potholes",
        location: "",
        file: null,
      });
      alert("Issue reported successfully!");
    } catch (error) {
      console.error("Error reporting issue:", error);
    }
  };

  const handleVote = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/issues/${id}/vote`);
      setIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue._id === id ? { ...issue, votes: issue.votes + 1 } : issue
        )
      );
      setVotedIssues((prevVotedIssues) => [...prevVotedIssues, id]);
    } catch (error) {
      console.error("Error voting for issue:", error);
    }
  };

  return (
    <div className="page-container">
      <div className="content-grid">
        <div className="header-section">
          <h1>Public Issues Section</h1>
          <p className="subtitle">Report public infrastructure issues and help prioritize resolutions.</p>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit} className="issue-form">
            <div className="form-group">
              <label htmlFor="description">Issue Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the issue in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="issueType">Issue Type:</label>
              <div className="select-wrapper">
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="custom-select"
                >
                  <option value="potholes">Potholes</option>
                  <option value="streetlights">Broken Streetlights</option>
                  <option value="garbage">Garbage Collection</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter the location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Photo/Video:</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  className="file-input"
                  name="file"
                  accept="image/*,video/*"
                  onChange={handleChange}
                />
                <button type="button" className="file-button">
                  Choose File
                </button>
              </div>
              {formData.file && (
                <p className="file-name">Selected File: {formData.file.name}</p>
              )}
            </div>

            <button type="submit" className="submit-button">Report Issue</button>
          </form>
        </div>

        <div className="issues-section">
          <h2>Reported Issues</h2>
          <div className="issues-list">
            {issues.map((issue) => (
              <div key={issue._id} className="issue-item">
                <p><strong>Description:</strong> {issue.description}</p>
                <p><strong>Type:</strong> {issue.issueType}</p>
                <p><strong>Location:</strong> {issue.location}</p>
                <p><strong>Status:</strong> {issue.status}</p>
                <p><strong>Votes:</strong> {issue.votes}</p>
                <button
                  onClick={() => handleVote(issue._id)}
                  disabled={votedIssues.includes(issue._id)}
                  className="vote-button"
                >
                  {votedIssues.includes(issue._id) ? "Voted" : "Vote"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicIssues;