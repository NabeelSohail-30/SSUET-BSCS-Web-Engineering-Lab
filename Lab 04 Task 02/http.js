// http.js
const axios = require("axios");
const fetchAboutPage = async () => {
  try {
    const response = await axios.get("https://www.ssuet.edu.pk/about-us/");
    console.log("University About Page:", response.data);
  } catch (error) {
    console.error("Error fetching About page:", error.message);
  }
};
fetchAboutPage();
