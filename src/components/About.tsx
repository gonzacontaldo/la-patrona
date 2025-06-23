import "bootstrap-icons/font/bootstrap-icons.css";
import interiorImg from "../assets/interior.jpg";

const About = () => {
  return (
    <section className="py-5" id="about">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2
            className="display-5 fw-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E36396",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
            }}
          >
            A celebration of Mexican flavor, heritage, and hospitality.
          </p>
        </div>

        {/* Image + Text */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={interiorImg}
              alt="La Patrona"
              className="w-100"
              style={{
                height: "100%", // Make sure the height fills the space
                maxHeight: "400px", // Prevent it from being too tall
                objectFit: "cover", // Crop it nicely if it doesn’t match
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6" data-aos="fade-left">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
              }}
            >
              At <strong>La Patrona</strong>, every plate tells a story — of
              tradition, of family, and of passion. Inspired by the kitchens of
              Jalisco and Oaxaca, our recipes blend old-world heritage with
              bold, modern flavors. We source local ingredients, celebrate
              regional spices, and cook from the heart.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
              }}
            >
              Whether you're here for a quiet dinner or a night of celebration,
              you're part of our familia. ¡Buen provecho!
            </p>
          </div>
        </div>

        {/* Icons / Values */}
        <div className="row text-center mt-5" data-aos="zoom-in-up">
          <div className="col-6 col-md-3 mb-4">
            <i className="bi bi-egg-fried fs-1 text-danger"></i>
            <p
              className="mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Authentic Recipes
            </p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="bi bi-basket2-fill fs-1 text-success"></i>
            <p
              className="mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Fresh Ingredients
            </p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="bi bi-music-note-beamed fs-1 text-warning"></i>
            <p
              className="mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Live Vibes
            </p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="bi bi-cup-straw fs-1 text-info"></i>
            <p
              className="mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Craft Cocktails
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
