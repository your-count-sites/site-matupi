interface Warnings {
  warnings: string;
  _key: string;
}

export interface IProduct {
  category: string;
  _updatedAt: string;
  slug: string;
  _createdAt: string;
  warnings: Warnings[];
  _type: string;
  _id: string;
  title: string;
  _rev: string;
  ingredients: string;
  nutritionFacts: string;
  mainImage: string;
  conservation: string;
}
