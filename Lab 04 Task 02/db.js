const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("university.db");
const createTable = (callback) => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY,
      name TEXT,
      dateOfBirth TEXT
    )`;
  db.run(query, (err) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");
    }
    callback(); // Call the callback after table creation
  });
};
const insertStudent = (id, name, dob) => {
  const query = "INSERT INTO students (id, name, dateOfBirth) VALUES (?, ?, ?)";
  db.run(query, [id, name, dob], (err) => {
    if (err) {
      console.error("Error inserting student:", err);
    } else {
      console.log(`Student ${id} inserted successfully`);
    }
  });
};
const selectAllStudents = () => {
  const query = "SELECT * FROM students";
  db.all(query, (err, rows) => {
    if (err) {
      console.error("Error selecting all students:", err);
    } else {
      console.log("All Students:");
      console.log(rows);
    }
    db.close();
  });
};
createTable(() => {
  insertStudent(1, "John Doe", "1990-01-01");
  insertStudent(2, "Jane Smith", "1992-05-15");
  selectAllStudents();
});
