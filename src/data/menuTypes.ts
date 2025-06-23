export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Subcategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  category: string;
  items?: MenuItem[]; // For categories like "Desserts"
  subcategories?: Subcategory[]; // For things like "Tacos", "Drinks"
}
