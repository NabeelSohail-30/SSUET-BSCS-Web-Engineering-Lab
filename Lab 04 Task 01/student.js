// student.js
class Student {
  constructor(id, name, dob) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dob;
  }
  enroll() {
    console.log(`${this.name} has been enrolled.`);
  }
}
module.exports = Student;
