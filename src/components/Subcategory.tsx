import React from "react";
import type { Subcategory as SubcategoryType } from "../data/menuTypes";
import MenuItemCard from "./MenuItemCard";

interface Props {
  subcategory: SubcategoryType;
}

const SubcategoryComponent: React.FC<Props> = ({ subcategory }) => {
  return (
    <div className="mb-5">
      {/* Subcategory Title */}
      <div
        className="mb-4 px-3 py-2"
        style={{
          backgroundColor: "#121212",
          color: "#16DFBA",
          borderLeft: "5px solid #E36396",
          fontSize: "1.5rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {subcategory.name}
      </div>

      {/* Menu Items */}
      <div className="row">
        {subcategory.items.map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryComponent;
