interface Slug {
  current: string;
  _type: string;
}

interface Ingredient {
  _key: string;
  name: string;
}

interface Instruction {
  _key: string;
  step: number;
}

interface IRecipe {
  category: string;
  description: string;
  difficult: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  prepTime: string;
  servings: string;
  slug: Slug;
  title: string;
  mainImage: string;
  thumbImage: string;
  _createdAt: string;
  _id: string;
  _updatedAt: string;
}
