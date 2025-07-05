import React, { useState, useRef } from "react";
import menuData from "../data/menuData.json";
import MenuSection from "../components/MenuSection";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./MenuPage.css"; // Make sure this file has your responsive CSS

const MenuPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const nodeRef = useRef(null);

  const tabs = [
    { emoji: "🥑", label: "Starters", color: "#E36396", text: "#FCFAFA" },
    { emoji: "🌮", label: "Main Course", color: "#16DFBA", text: "#090A16" },
    { emoji: "🍰", label: "Desserts", color: "#21DEE8", text: "#090A16" },
    { emoji: "🍹", label: "Drinks", color: "#F8B400", text: "#090A16" },
  ];

  const currentCategory = menuData[selectedIndex];

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#090A16" }}>
      <div className="container py-5 text-center">
        {/* Title */}
        <h1
          className="text-center mb-5 menu-title"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 3.5rem)", // Responsive scaling
            color: "#FCFAFA",
            letterSpacing: "2px",
            fontWeight: 800,
            textTransform: "uppercase",
            textShadow: "2px 2px 8px #E36396",
          }}
        >
          🌮 Our Menu 🍹
        </h1>

        {/* Tab Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`btn fw-bold px-4 py-2 menu-tab-btn ${
                selectedIndex === i ? "" : "btn-outline-light"
              }`}
              style={{
                backgroundColor:
                  selectedIndex === i ? tab.color : "transparent",
                color: selectedIndex === i ? tab.text : "#FCFAFA",
                borderRadius: "999px",
                border: "2px solid #FCFAFA",
                fontSize: "1.25rem",
              }}
              onClick={() => setSelectedIndex(i)}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentCategory.category}
            nodeRef={nodeRef}
            timeout={300}
            classNames="fade-collapse"
            unmountOnExit
          >
            <div ref={nodeRef}>
              <MenuSection category={currentCategory} />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default MenuPage;
