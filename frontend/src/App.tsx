import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
          borderBottom: "1px solid #eee",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <div style={{ padding: 24 }}>
              <h1>Welcome to the App</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
