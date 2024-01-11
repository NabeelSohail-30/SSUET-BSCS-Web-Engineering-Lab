// 1a. Create a generator function called generateRegistrationNumbers
function* generateRegistrationNumbers(limit) {
  let count = 1;

  while (count <= limit) {
    yield count;
    count++;
  }
}

// 1b to 1d: Example usage of the generator function
const registrationGenerator = generateRegistrationNumbers(5);

console.log(registrationGenerator.next().value); // 1
console.log(registrationGenerator.next().value); // 2
console.log(registrationGenerator.next().value); // 3
console.log(registrationGenerator.next().value); // 4
console.log(registrationGenerator.next().value); // 5
console.log(registrationGenerator.next().value); // undefined (generator stops)

// 2b. Create a generic function called defineLabMember
function defineLabMember(member) {
  member.startLab();
}
// 2c. Define two classes LabAssistant and LabAdmin implementing ILabMember
var LabAssistant = /** @class */ (function () {
  function LabAssistant() {}
  LabAssistant.prototype.startLab = function () {
    console.log("Lab Assistant is starting the lab.");
  };
  return LabAssistant;
})();
var LabAdmin = /** @class */ (function () {
  function LabAdmin() {}
  LabAdmin.prototype.startLab = function () {
    console.log("Lab Admin is starting the lab.");
  };
  return LabAdmin;
})();
// 2d. Call defineLabMember function and pass instances of LabAssistant and LabAdmin
var labAssistant = new LabAssistant();
var labAdmin = new LabAdmin();
defineLabMember(labAssistant); // Lab Assistant is starting the lab.
defineLabMember(labAdmin); // Lab Admin is starting the lab.
