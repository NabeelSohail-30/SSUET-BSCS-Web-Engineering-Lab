// StudentProfile.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentSuccess } from "./studentActions";

const StudentProfile = ({ studentId }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);

  useEffect(() => {
    // Fetch student details based on studentId
    if (studentId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${studentId}`)
        .then((response) => response.json())
        .then((data) => dispatch(fetchStudentSuccess(data)))
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, [studentId, dispatch]);

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
