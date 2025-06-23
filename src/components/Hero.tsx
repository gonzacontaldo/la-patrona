import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="position-relative vh-100 overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="La Patrona"
        className="w-100 h-100"
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(9, 10, 22, 0.7)", zIndex: 1 }}
      ></div>

      {/* Title + Buttons */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-white text-center"
        style={{ zIndex: 2 }}
      >
        <h1
          className="display-3 fw-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          LA PATRONA
        </h1>

        <p
          className="lead"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Authentic Flavors of Mexico
        </p>

        <div
          className="d-flex justify-content-center flex-wrap gap-3 mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a
            href="#menu"
            className="btn btn-lg"
            style={{ backgroundColor: "#E36396", color: "#FCFAFA" }}
          >
            View Menu
          </a>
          <a
            href="#book"
            className="btn btn-lg"
            style={{ backgroundColor: "#16DFBA", color: "#090A16" }}
          >
            Book Table
          </a>
          <a
            href="#party"
            className="btn btn-lg"
            style={{ backgroundColor: "#21DEE8", color: "#090A16" }}
          >
            Party Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
