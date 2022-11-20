import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Mentorship from "./pages/Mentorship";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/chat" element={<Chat />} />
            <Route exact path="/mentorship" element={<Mentorship />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
