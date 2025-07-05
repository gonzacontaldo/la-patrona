import React, { useState } from "react";
import type {
  MenuCategory,
  Subcategory as SubcategoryType,
  MenuItem,
} from "../data/menuTypes";
import SubcategoryComponent from "./Subcategory";
import MenuItemCard from "./MenuItemCard";
import MenuItemModal from "./MenuItemModal";

interface Props {
  category: MenuCategory;
}

const MenuSection: React.FC<Props> = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section className="mb-4">
      {/* Subcategories */}
      {category.subcategories?.map((sub: SubcategoryType, index) => (
        <SubcategoryComponent
          key={index}
          subcategory={sub}
          onItemClick={setSelectedItem}
        />
      ))}

      {/* Direct items without subcategories */}
      {category.items && (
        <div className="row">
          {category.items.map((item, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              onClick={() => setSelectedItem(item)}
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <MenuItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default MenuSection;
