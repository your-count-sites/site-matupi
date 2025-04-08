interface Warning {
  message: string;
}

interface Ingredient {
  name: string;
  _key: string;
}

export interface IProduct {
  category: string;
  _updatedAt: string;
  slug: string;
  _createdAt: string;
  warnings: Warning[];
  _type: string;
  _id: string;
  title: string;
  _rev: string;
  ingredients: Ingredient[];
}
