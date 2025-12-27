
import { MenuItem, Table } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Cured Salmon Smørrebrød',
    description: 'Delicate cured salmon with dill cream cheese and pickled onions on a slice of fresh rye bread.',
    price: '180,000 VND',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400',
    category: 'starters'
  },
  {
    id: '2',
    name: 'Herring Plate',
    description: 'A selection of pickled herring served with dark rye bread, butter, and sharp cheese.',
    price: '210,000 VND',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400',
    category: 'starters'
  },
  {
    id: '3',
    name: 'Swedish Meatballs (Köttbullar)',
    description: 'Classic meatballs served with gravy, lingonberry jam, pickled cucumber, and potato purée.',
    price: '350,000 VND',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=400',
    category: 'main-courses'
  },
  {
    id: '4',
    name: 'Pan-Seared Arctic Char',
    description: 'Served with a lemon-butter sauce, dill potatoes, and seasonal roasted vegetables.',
    price: '420,000 VND',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400',
    category: 'main-courses'
  },
  {
    id: '5',
    name: 'Kanelbulle (Cinnamon Bun)',
    description: 'Warm, freshly baked Swedish cinnamon bun served with a side of vanilla ice cream.',
    price: '120,000 VND',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400',
    category: 'desserts'
  }
];

export const TABLES: Table[] = [
  { id: 1, label: 'Table 1 (Window)', type: 'round', status: 'available', cx: 60, cy: 60 },
  { id: 2, label: 'Table 2 (Window)', type: 'rect', status: 'available', x: 120, y: 45, width: 40, height: 30 },
  { id: 3, label: 'Table 3 (Window)', type: 'rect', status: 'reserved', x: 200, y: 45, width: 40, height: 30 },
  { id: 4, label: 'Table 4 (Central)', type: 'rect', status: 'available', x: 80, y: 140, width: 60, height: 40 },
  { id: 5, label: 'Table 5 (Corner)', type: 'round', status: 'available', cx: 60, cy: 220 },
  { id: 6, label: 'Table 6 (Corner)', type: 'round', status: 'available', cx: 200, cy: 200 },
];
