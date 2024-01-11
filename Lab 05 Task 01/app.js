function calculator(op1, op2, operator) {
  const result = operator(op1, op2);
  console.log("Result:", result);
  return result;
}
function add(a, b) {
  return a + b;
}
calculator(5, 3, add);

function getFullName() {
  return this.firstname + " " + this.lastname;
}

const person1 = { firstname: "John", lastname: "Doe" };
const person2 = { firstname: "Jane", lastname: "Doe" };

console.log(getFullName.apply(person1));
console.log(getFullName.apply(person2));

function Timer() {
  let counter = 0;

  function tick(limit) {
    const intervalId = setInterval(() => {
      counter++;
      console.log(counter);
      if (counter >= limit) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  function start(limit) {
    tick(limit);
  }

  return { start };
}

const timer = Timer();
timer.start(5);

const Student = (function () {
  const studentModule = {
    studentProperty: "Student Property",
  };

  const Courses = {
    coursesProperty: "Courses Property",
  };

  const Result = {
    resultProperty: "Result Property",
  };

  console.log(studentModule.studentProperty);
  console.log(Courses.coursesProperty);
  console.log(Result.resultProperty);
})();

function getProgramResults() {
  const runProgramPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Program finished successfully");
    }, 3000);
  });

  (async () => {
    try {
      const result = await runProgramPromise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
}

class Program {
  run() {
    console.log("Running program");
  }
}

class TeacherProgram extends Program {
  release() {
    console.log("Releasing teacher program");
  }
}

class StudentProgram extends Program {
  debug() {
    console.log("Debugging student program");
  }
}

const teacherInstance = new TeacherProgram();
const studentInstance = new StudentProgram();

console.log(teacherInstance.run());
console.log(studentInstance.run());

console.log(teacherInstance.release());
console.log(studentInstance.debug());
