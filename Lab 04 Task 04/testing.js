// testing.js
const University = require("./university");
// Test University class
const testUniversity = async () => {
  const university = new University("Test University");
  console.log("Test University:");
  console.log(university);
  // Assert if the instance has image property set to an empty string
  console.assert(
    university.image === "",
    "Image property should be an empty string"
  );
  // Call setImage method on the new instance
  await university.setImage();
  // Assert if the instance has image property set to some string
  console.assert(
    university.image !== "",
    "Image property should be set to some string"
  );
};
testUniversity();
