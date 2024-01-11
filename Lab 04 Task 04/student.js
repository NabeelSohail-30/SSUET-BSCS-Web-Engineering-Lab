// student.js
class Student {
  constructor(id, name, dob) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dob;
    this.university = null;
    this.courses = [];
  }
  addCourse(course) {
    this.courses.push(course);
  }
  belongsToUniversity(university) {
    this.university = university;
  }
}

module.exports = Student;
