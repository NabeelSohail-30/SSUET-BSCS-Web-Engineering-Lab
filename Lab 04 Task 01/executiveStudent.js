// executiveStudent.js
const Student = require("./student");
class ExecutiveStudent extends Student {
  attendTheory() {
    console.log(`${this.name} is attending the theory session.`);
  }
}
module.exports = ExecutiveStudent;
