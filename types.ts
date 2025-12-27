
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starters' | 'main-courses' | 'desserts' | 'beverages';
}

export interface Table {
  id: number;
  label: string;
  type: 'round' | 'rect';
  status: 'available' | 'selected' | 'reserved';
  cx?: number;
  cy?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export type PageType = 'home' | 'menu' | 'reservations' | 'about' | 'gallery' | 'contact';
