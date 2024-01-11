// university.js
const axios = require("axios");
class University {
  constructor(name) {
    this.name = name;
    this.image = "";
  }
  setImage = async () => {
    // Fetch the SSUET logo from the SSUET website using axios GET method
    // Assume the logo URL, replace it with the actual logo URL
    const logoUrl =
      "https://www.ssuet.edu.pk/wp-content/uploads/2022/04/Official-SSUET-Logo.webp";
    axios
      .get(logoUrl, { responseType: "arraybuffer" })
      .then((response) => {
        const imageBuffer = Buffer.from(response.data, "binary").toString(
          "base64"
        );
        this.image = `data:image/png;base64,${imageBuffer}`;
        console.log("Image property has been set.");
      })
      .catch((error) => {
        console.error("Error fetching image:", error.message);
      });
  };
}
module.exports = University;
