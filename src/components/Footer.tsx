import logo from "/images/logo.jpg";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#090A16", color: "#FCFAFA" }}
      className="pt-5 pb-3 mt-5"
    >
      <div className="container">
        <div className="row align-items-start text-center text-md-start">
          {/* Column 1: Logo */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img
              src={logo}
              alt="La Patrona Logo"
              style={{
                height: "150px",
                objectFit: "contain",
              }}
              className="mb-3"
            />
            <p
              className="mb-0"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#FCFAFA",
              }}
            >
              La Patrona — authentic flavors, unforgettable nights.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5
              className="mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#E36396",
              }}
            >
              Explore
            </h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#book" className="footer-link">
                  Book a Table
                </a>
              </li>
              <li>
                <a href="#party" className="footer-link">
                  Party Reservation
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4">
            <h5
              className="mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#E36396",
              }}
            >
              Contact
            </h5>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i> +1 (437) 233-5075
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>{" "}
              carretojenny149@gmail.com
            </p>
            <p className="mb-2">
              <a
                href="https://instagram.com/lapatrona.toronto"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <i className="bi bi-instagram me-2"></i> @lapatrona.toronto
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <small style={{ color: "#777" }}>
            © {new Date().getFullYear()} La Patrona. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
