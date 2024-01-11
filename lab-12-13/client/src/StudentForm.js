// src/StudentForm.js
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const StudentForm = () => {
  const [students, setStudents] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      grade: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (!formik.values._id) {
        // Add new student
        axios
          .post("http://localhost:5000/students", values)
          .then((response) => {
            setStudents([...students, response.data]);
            resetForm();
          })
          .catch((error) => console.error("Error adding student:", error));
      } else {
        // Update existing student
        axios
          .put(`http://localhost:5000/students/${formik.values._id}`, values)
          .then((response) => {
            const updatedStudents = students.map((student) =>
              student._id === response.data._id ? response.data : student
            );
            setStudents(updatedStudents);
            resetForm();
          })
          .catch((error) => console.error("Error updating student:", error));
      }
    },
  });

  useEffect(() => {
    // Fetch students on component mount
    axios
      .get("http://localhost:5000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleEdit = (student) => {
    formik.setValues(student);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        const updatedStudents = students.filter(
          (student) => student._id !== id
        );
        setStudents(updatedStudents);
        formik.resetForm();
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Grade"
              name="grade"
              value={formik.values.grade}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              {formik.values._id ? "Update" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </form>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEdit(student)}
                    variant="outlined"
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(student._id)}
                    variant="outlined"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentForm;
