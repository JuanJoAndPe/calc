const axios = require('axios');

const makeRequest = async (body) => {
  const response = await axios.post('https://api-test.avalburo.com/services/V8/getWebService', body, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from('WSTEST-MAXC:YC^1#I8P@V').toString('base64'),
      'Content-Type': 'application/json',
    }
  });
  return response.data;
};

module.exports = { makeRequest };
