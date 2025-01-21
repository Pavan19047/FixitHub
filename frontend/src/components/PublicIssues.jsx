import { useState } from "react";
import "../styles/PublicIssues.css";

const PublicIssues = () => {
  const [formData, setFormData] = useState({
    description: "",
    issueType: "potholes",
    location: "",
    file: null,
  });

  const [issues, setIssues] = useState([]);
  const [votedIssues, setVotedIssues] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new issue to the list
    setIssues((prevIssues) => [
      ...prevIssues,
      {
        id: prevIssues.length + 1,
        description: formData.description,
        issueType: formData.issueType,
        location: formData.location,
        file: formData.file,
        votes: 0,
        status: "Pending",
      },
    ]);

    // Reset form data
    setFormData({
      description: "",
      issueType: "potholes",
      location: "",
      file: null,
    });
    alert("Issue reported successfully!");
  };

  // Handle voting for an issue
  const handleVote = (id) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, votes: issue.votes + 1 } : issue
      )
    );
    setVotedIssues((prevVotedIssues) => [...prevVotedIssues, id]);
  };

  return (
    <div className="container">
      <h1>Public Issues Section</h1>
      <p>
        Report public infrastructure issues and help prioritize resolutions.
      </p>

      {/* Issue Reporting Form */}
      <form onSubmit={handleSubmit} className="issue-form">
        <div>
          <label>
            Issue Description:
            <textarea
              name="description"
              placeholder="Describe the issue in detail..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Issue Type:
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
            >
              <option value="potholes">Potholes</option>
              <option value="streetlights">Broken Streetlights</option>
              <option value="garbage">Garbage Collection</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              placeholder="Enter the location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
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
        <button type="submit">Report Issue</button>
      </form>

      {/* Display Reported Issues */}
      <h2>Reported Issues</h2>
      <div className="issues-list">
        {issues.map((issue) => (
          <div key={issue.id} className="issue-item">
            <p>
              <strong>Description:</strong> {issue.description}
            </p>
            <p>
              <strong>Type:</strong> {issue.issueType}
            </p>
            <p>
              <strong>Location:</strong> {issue.location}
            </p>
            <p>
              <strong>Status:</strong> {issue.status}
            </p>
            <p>
              <strong>Votes:</strong> {issue.votes}
            </p>
            <button
              onClick={() => handleVote(issue.id)}
              disabled={votedIssues.includes(issue.id)}
            >
              {votedIssues.includes(issue.id) ? "Voted" : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicIssues;
