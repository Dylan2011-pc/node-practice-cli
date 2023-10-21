const axios = require("axios");

async function updateSecret(baseUrl, secretText) {
  return axios.post(`${baseUrl}/updateSecret`, { secretText });
}

async function validateSecret(baseUrl, secretText) {
  return axios.post(`${baseUrl}/validateSecret`, { secretText });
}

module.exports = { updateSecret, validateSecret };
