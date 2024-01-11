// StudentListing.js
import React from "react";
import { useStudentContext, StudentProvider } from "./StudentContext";

const StudentListing = () => {
  const { students, selectedStudentId, handleRowClick } = useStudentContext();

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

// Wrap your main App component with the StudentProvider
const App = () => (
  <StudentProvider>
    <StudentListing />
  </StudentProvider>
);

export default App;
