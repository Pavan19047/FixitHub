import { useState, useEffect } from "react";
import { getResolvedIssues } from "../api";
import "../styles/ResolvedIssues.css";

const ResolvedIssues = () => {
  const [resolvedIssues, setResolvedIssues] = useState([]);

  useEffect(() => {
    getResolvedIssues().then((res) => setResolvedIssues(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Resolved Issues</h1>
      <div className="resolved-list">
        {resolvedIssues.length === 0 ? (
          <p>No issues have been resolved yet.</p>
        ) : (
          resolvedIssues.map((issue) => (
            <div key={issue._id} className="resolved-item">
              <p><strong>Issue ID:</strong> {issue.issueId}</p>
              <p><strong>Resolved By:</strong> {issue.resolvedBy}</p>
              <p><strong>Details:</strong> {issue.resolutionDetails}</p>
              <p><strong>Date:</strong> {new Date(issue.resolvedAt).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResolvedIssues;
