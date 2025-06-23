const Contact = () => {
  return (
    <section
      className="py-5"
      id="contact"
      style={{ backgroundColor: "#090A16", color: "#FCFAFA" }}
    >
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
            Get in Touch
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
            }}
          >
            We’d love to hear from you!
          </p>
        </div>

        {/* Horizontal Contact Line */}
        <div
          className="row justify-content-center text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-12 col-md-10">
            <div className="d-flex justify-content-center flex-wrap gap-4 fs-5">
              <a
                href="tel:+11234567890"
                className="contact-link text-decoration-none"
              >
                <i className="bi bi-telephone-fill me-2"></i> +1 (111) 111-1111
              </a>
              <a
                href="https://www.instagram.com/lapatrona.toronto/"
                target="_blank"
                rel="noreferrer"
                className="contact-link text-decoration-none"
              >
                <i className="bi bi-instagram me-2"></i> @lapatrona.toronto
              </a>
              <a
                href="mailto:contact@lapatrona.com"
                className="contact-link text-decoration-none"
              >
                <i className="bi bi-envelope-fill me-2"></i>{" "}
                ejemplo@lapatrona.com
              </a>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="col-12 col-md-10">
            <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.074716421852!2d-79.4198777!3d43.6567665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34da9672e981%3A0xd89e6c73d896eb39!2s669%20College%20St%2C%20Toronto%2C%20ON%20M6G%201B9%2C%20Canada!5e0!3m2!1sen!2sca!4v1719070000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Patrona Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
