import React from "react";
import type { MenuItem } from "../data/menuTypes";

interface Props {
  item: MenuItem;
  onClose: () => void;
}

const MenuItemModal: React.FC<Props> = ({ item, onClose }) => {
  const hasImage =
    item.image && item.image.trim() !== "" && item.image.trim() !== "/images/";

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 2000,
      }}
      onClick={onClose} // Clicking outside closes modal
    >
      <div
        className="bg-dark text-light p-4 rounded"
        style={{
          maxWidth: "500px",
          width: "90%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="position-absolute top-0 end-0 m-2"
          style={{
            background: "#E36396",
            color: "#FCFAFA",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Image */}
        {hasImage && (
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid mb-3"
            style={{ borderRadius: "0.5rem" }}
          />
        )}

        {/* Name */}
        <h3 className="fw-bold text-uppercase">{item.name}</h3>

        {/* Description */}
        <p
          className="mt-3"
          style={{
            color: "#CCCCCC",
            fontSize: "1.1rem",
            lineHeight: "1.5",
          }}
        >
          {item.description}
        </p>

        {/* Price */}
        <p className="fw-bold fs-4 mt-3" style={{ color: "#21DEE8" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuItemModal;
