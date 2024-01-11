// regularStudent.js
const Student = require("./student");
class RegularStudent extends Student {
  attendLab() {
    console.log(`${this.name} is attending the lab.`);
  }
}
module.exports = RegularStudent;
