// 1a. Create a class called Library
class Library {
  constructor(sections, books, manager, openingTime, closingTime) {
    this.sections = sections;
    this.books = books;
    this.manager = manager;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
  }

  // 1b. Add functions with arrow functions
  manageLibrary = () => {
    console.log("Library is being managed.");
  };

  issueBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const availableBooks = this.books.slice(0, 3);
        resolve(availableBooks);
      }, 1000);
    });
  };

  addNewSection = () => {
    console.log("New section added.");
  };

  openLibrary = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.openingTime);
      }, 2000);
    });
  };

  closeLibrary = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.closingTime);
      }, 1000);
    });
  };
}

// 1h. Create instances of the Library class and call each function
const libraryInstance = new Library(
  ["Fiction", "Non-fiction"],
  ["Book1", "Book2"],
  "John Doe",
  "9:00 AM",
  "6:00 PM"
);

// 1i. Loop through the keys of the instance and log the keys
for (const key in libraryInstance) {
  console.log(key);
}

// 1e. Return books from issueBooks promise and use then to receive the result
libraryInstance.issueBooks().then((books) => {
  console.log("Issued Books:", books);
});

// 1f. Return openingTime from openLibrary function using async/await
(async () => {
  const openingTime = await libraryInstance.openLibrary();
  console.log("Library Opening Time:", openingTime);
})();

// 1g. Return closingTime from closeLibrary function using async/await
(async () => {
  const closingTime = await libraryInstance.closeLibrary();
  console.log("Library Closing Time:", closingTime);
})();

// 2a. Create Student registration form using React
const StudentForm = () => {
  return <div>Student Registration Form</div>;
};

// 2b. Create Teacher login form using React
const TeacherForm = () => {
  return <div>Teacher Login Form</div>;
};

// 2c. Create two routes for each student and teacher forms
const App = () => {
  return (
    <div>
      <a href="/student">Student Form</a>
      <a href="/teacher">Teacher Form</a>
    </div>
  );
};

// 2d. Render React forms using Babel transpiler
ReactDOM.render(
  <Router>
    <Route path="/student" component={StudentForm} />
    <Route path="/teacher" component={TeacherForm} />
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById("root")
);

// 3b. Create two classes and extend each from its respective interfaces
var Teacher = /** @class */ (function () {
  function Teacher() {}
  Teacher.prototype.teach = function () {
    console.log("Teacher is teaching.");
  };
  return Teacher;
})();
var Student = /** @class */ (function () {
  function Student() {}
  Student.prototype.study = function () {
    console.log("Student is studying.");
  };
  return Student;
})();
