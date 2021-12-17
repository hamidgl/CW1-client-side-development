import React from "react";
import Main from "./pages/main";
import Itineraries from "./pages/Itineraries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditItinerary from "./components/EditItinerary";
//this is main route for the project to render components
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itineraries/edit" element={<EditItinerary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
