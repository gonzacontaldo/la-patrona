import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <Router>
      {/* Fixed Menu Button */}
      <div className="position-fixed top-0 end-0 p-4" style={{ zIndex: 5 }}>
        <i
          className="bi bi-list text-white fs-1"
          role="button"
          onClick={toggleNav}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      {/* Global Sidebar */}
      <div
        className={`side-nav vh-100 shadow p-4 position-fixed top-0 end-0 ${
          navOpen ? "slide-in" : "slide-out"
        }`}
        style={{
          width: "280px",
          zIndex: 10,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          backgroundColor: "#FCFAFA",
          color: "#090A16",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E36396",
            }}
          >
            Navigation
          </h4>
          <i className="bi bi-x-lg fs-4" role="button" onClick={toggleNav}></i>
        </div>

        <ul className="list-unstyled">
          <li className="mb-3">
            <a
              href="#about"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-info-circle-fill text-primary"></i> About Us
            </a>
          </li>
          <li className="mb-3">
            <Link
              to="/menu"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
              onClick={toggleNav}
            >
              <i className="bi bi-journal-text text-danger"></i> Menu
            </Link>
          </li>
          <li className="mb-3">
            <a
              href="#book"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-calendar-check text-success"></i> Book Table
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#party"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-balloon-heart text-pink"></i> Party
              Reservation
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#contact"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-envelope-paper text-info"></i> Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
