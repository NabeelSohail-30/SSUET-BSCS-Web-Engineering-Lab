// testing.js
const RegularStudent = require("../Lab 04 Task 01/regularStudent");
const ExecutiveStudent = require("../Lab 04 Task 01/executiveStudent");

const testRegularStudent = () => {
  const regularStudent = new RegularStudent(1, "John Doe", "1990-01-01");
  console.log("Test Regular Student:");
  console.log(regularStudent);
  regularStudent.enroll();
  regularStudent.attendLab();
};

const testExecutiveStudent = () => {
  const executiveStudent = new ExecutiveStudent(2, "Jane Smith", "1992-05-15");
  console.log("Test Executive Student:");
  console.log(executiveStudent);
  executiveStudent.enroll();
  executiveStudent.attendTheory();
};

testRegularStudent();
testExecutiveStudent();
