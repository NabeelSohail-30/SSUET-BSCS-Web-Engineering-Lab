// db.js
const sqlite3 = require("sqlite3").verbose();
const University = require("./university");
// Create and open database
const db = new sqlite3.Database("university.db");
// Create University table
const createUniversityTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS universities (
      id INTEGER PRIMARY KEY,
      name TEXT,
      image TEXT
    )
  `;
  db.run(query);
};
// Insert University instances
const insertUniversity = (university) => {
  const query = "INSERT INTO universities (name, image) VALUES (?, ?)";
  db.run(query, [university.name, university.image]);
};
createUniversityTable();
// Create University instances
const university1 = new University("SSUET");
const university2 = new University("Example University");
// Call setImage method on both instances
university1.setImage();
university2.setImage();

// Insert both instances into the database
insertUniversity(university1);
insertUniversity(university2);
