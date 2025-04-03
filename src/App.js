import React from "react";
import TeamPage from "./components/TeamPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage.js";
import EventsPage from "./components/EventsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
