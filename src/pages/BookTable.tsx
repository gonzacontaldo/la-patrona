import { Link } from "react-router-dom";

const BookTable = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        backgroundColor: "#090A16",
        color: "#FCFAFA",
        padding: "2rem",
      }}
    >
      <h1
        className="display-4 fw-bold mb-3"
        style={{ fontFamily: "'Playfair Display', serif", color: "#E36396" }}
      >
        Book a Table
      </h1>
      <p
        className="lead mb-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.5rem",
        }}
      >
        Coming Soon...
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="btn btn-lg"
        style={{ backgroundColor: "#16DFBA", color: "#090A16" }}
      >
        Back to Home
      </Link>
    </section>
  );
};

export default BookTable;
