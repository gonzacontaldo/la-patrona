import React from "react";
import type { MenuItem } from "../data/menuTypes";

interface Props {
  item: MenuItem;
}

const MenuItemCard: React.FC<Props> = ({ item }) => {
  const hasImage =
    item.image && item.image.trim() !== "" && item.image.trim() !== "/images/";

  return (
    <div
      className="card h-100 text-light d-flex flex-column"
      style={{
        backgroundColor: "#1b1c1c",
        border: "2px solid #E36396",
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "scale(1.02)";
        el.style.boxShadow = "0 0 20px #E36396AA";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "scale(1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Only show image if it exists */}
      {hasImage && (
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
          style={{
            height: "200px",
            objectFit: "cover",
            borderBottom: "2px solid #E36396",
          }}
        />
      )}

      {/* Content */}
      <div
        className={`card-body d-flex flex-column ${
          hasImage
            ? "justify-content-between"
            : "justify-content-center align-items-center text-center"
        }`}
      >
        <h5
          className="card-title fw-bold text-uppercase mb-2"
          style={{ color: "#FCFAFA" }}
        >
          {item.name}
        </h5>
        <p
          className="card-text small"
          style={{
            color: "#CCCCCC",
            fontSize: "0.9rem",
            marginTop: "0.5rem",
          }}
        >
          {item.description}
        </p>
        <p className="fw-bold fs-5 mt-3" style={{ color: "#21DEE8" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;
