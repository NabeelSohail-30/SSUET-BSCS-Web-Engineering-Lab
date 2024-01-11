// StudentListing.js
import React, { useEffect, useState } from "react";

const StudentListing = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleRowClick = (studentId) => {
    setSelectedStudentId(studentId);
    alert(`You clicked on student ${selectedStudentId}`);
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
