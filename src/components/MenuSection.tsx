import React from "react";
import type {
  MenuCategory,
  Subcategory as SubcategoryType,
} from "../data/menuTypes";
import SubcategoryComponent from "./Subcategory";
import MenuItemCard from "./MenuItemCard";

interface Props {
  category: MenuCategory;
}

const MenuSection: React.FC<Props> = ({ category }) => {
  return (
    <section className="mb-4">
      {/* Subcategories */}
      {category.subcategories?.map((sub: SubcategoryType, index) => (
        <SubcategoryComponent key={index} subcategory={sub} />
      ))}

      {/* Direct items without subcategories */}
      {category.items && (
        <div className="row">
          {category.items.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuSection;
