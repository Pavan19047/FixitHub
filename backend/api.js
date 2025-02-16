import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Report a new issue
export const reportIssue = async (issueData) => {
  return await axios.post(`${API_URL}/issues`, issueData);
};

// Get all reported issues
export const getIssues = async () => {
  return await axios.get(`${API_URL}/issues`);
};

// Vote for an issue
export const voteIssue = async (issueId) => {
  return await axios.put(`${API_URL}/issues/${issueId}/vote`);
};

// Get resolved issues (from 'reports' collection)
export const getResolvedIssues = async () => {
  return await axios.get(`${API_URL}/reports`);
};

// Get list of workers
export const getWorkers = async () => {
  return await axios.get(`${API_URL}/workers`);
};