// StudentListing.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStudent } from "./studentActions";

const StudentListing = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  const handleRowClick = (studentId) => {
    dispatch(setSelectedStudent(studentId));
    alert(`You clicked on student ${studentId}`);
  };

  return (
    <div>
      <h2>Student Listing</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} onClick={() => handleRowClick(student.id)}>
              <td>{student.id}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentListing;

// Wrap your main App component with the Redux store provider
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <StudentListing />
  </Provider>
);

export default App;
