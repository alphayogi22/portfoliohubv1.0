import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/portfolio';

export const fetchPortfolios = async () => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    throw error;
  }
};

export const createPortfolio = async (portfolioData) => {
  try {
    const formData = new FormData();
    formData.append('Title', portfolioData.title);
    formData.append('Description', portfolioData.description);
    formData.append('Image', portfolioData.image);
    formData.append('Resume', portfolioData.resume);

    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};