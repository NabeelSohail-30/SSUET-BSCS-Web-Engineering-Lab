// app.js
const Student = require("./student");
const RegularStudent = require("./regularStudent");
const ExecutiveStudent = require("./executiveStudent");

// Create instances of RegularStudent and ExecutiveStudent
const regularStudent = new RegularStudent(1, "John Doe", "1990-01-01");
const executiveStudent = new ExecutiveStudent(2, "Jane Smith", "1992-05-15");
// Validate properties
console.log("Regular Student:");
console.log(regularStudent);
console.log("\nExecutive Student:");
console.log(executiveStudent);
