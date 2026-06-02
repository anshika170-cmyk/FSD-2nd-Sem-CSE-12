import React from "react";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "Computer Science",
      marks: 85,
    },
    {
      id: 2,
      name: "Anita Verma",
      course: "Information Technology",
      marks: 92,
    },
    {
      id: 3,
      name: "Rohan Gupta",
      course: "Electronics",
      marks: 78,
    },
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h2>{student.name}</h2>
          <p>Course: {student.course}</p>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default App;