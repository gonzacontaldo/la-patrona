import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import BookTable from "./pages/BookTable";
import Footer from "./components/Footer";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <Router>
      {/* Fixed Menu Button */}
      <div
        className="position-fixed top-0 end-0 m-3 pt-1 d-flex align-items-center justify-content-center menu-icon-btn"
        style={{
          width: "60px",
          height: "60px",
          zIndex: 1000,
          borderRadius: "10%",
          backgroundColor: "#E36396",
          border: "2px solid #FCFAFA",
          transition: "all 0.3s ease",
        }}
      >
        <i
          className="bi bi-list text-white fs-2"
          role="button"
          onClick={toggleNav}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      {/* Sidebar */}
      <div
        className={`side-nav vh-100 shadow p-4 position-fixed top-0 end-0 ${
          navOpen ? "slide-in" : "slide-out"
        }`}
        style={{
          width: "280px",
          zIndex: 1100,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          backgroundColor: "#FCFAFA",
          color: "#090A16",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontFamily: "'Playfair Display', serif",
                color: "#090A16",
              }}
            >
              LA PATRONA
            </a>
          </h4>
          <i className="bi bi-x-lg fs-4" role="button" onClick={toggleNav}></i>
        </div>

        <ul className="list-unstyled">
          <li className="mb-3">
            <a
              href="/#about"
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
              href="/book"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-calendar-check text-success"></i> Book Table
            </a>
          </li>
          <li className="mb-3">
            <a
              href="/book"
              className="nav-link-hover text-dark d-flex align-items-center gap-2"
            >
              <i className="bi bi-balloon-heart text-pink"></i> Party
              Reservation
            </a>
          </li>
          <li className="mb-3">
            <a
              href="/#contact"
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
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookTable />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
