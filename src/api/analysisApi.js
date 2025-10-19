import axios from 'axios';

// IMPORTANT: Update this to your deployed backend URL
const API_BASE_URL = 'http://localhost:8000/api/v1/data';

/**
 * Uploads a dataset file to the backend for analysis.
 * @param {File} file - CSV or Excel file
 * @returns {Promise<Object>} - Analysis results (summary, metrics, visualizations)
 */
export const uploadDataset = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    console.error('API Upload Error:', error.response ? error.response.data : error.message);
    const message =
      error.response && error.response.data && error.response.data.detail
        ? error.response.data.detail
        : 'Analysis failed due to a network or server error.';
    throw new Error(message);
  }
};
