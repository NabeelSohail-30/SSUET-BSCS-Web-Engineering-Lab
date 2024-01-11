// StudentProfile.js
import React, { useEffect, useState } from "react";

const StudentProfile = ({ studentId }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student details based on studentId
    if (studentId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${studentId}`)
        .then((response) => response.json())
        .then((data) => setStudent(data))
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, [studentId]);

  return (
    <div>
      <h2>Student Profile</h2>
      {student ? (
        <div>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          {/* Display more details as needed */}
        </div>
      ) : (
        <p>No student selected</p>
      )}
    </div>
  );
};

export default StudentProfile;
