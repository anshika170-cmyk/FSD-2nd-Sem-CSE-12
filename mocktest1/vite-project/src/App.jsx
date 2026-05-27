import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Student Registration Form
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;