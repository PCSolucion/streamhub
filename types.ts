
export type Category = 'All Assets' | 'Widgets' | 'Intros' | 'Outros' | 'Scripts' | 'Tutorials';

export type BadgeType = 'Bestseller' | 'Sale' | 'Free' | 'New' | 'Featured';

export interface Asset {
  id: string;
  title: string;
  price: number | 'Free';
  oldPrice?: number;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  badge?: BadgeType;
}

export interface Tutorial {
  id: string;
  title: string;
  duration: string;
  views: string;
  date: string;
  thumbnail: string;
}

export type View = 'marketplace' | 'tutorials' | 'product-detail';
