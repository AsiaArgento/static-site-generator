const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//a3528a841e824800856fc9e628594de9
