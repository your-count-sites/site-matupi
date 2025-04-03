interface Slug {
  current: string;
  _type: string;
}

interface Ingredient {
  name: string;
  quantity: string;
}

interface Instruction {
  step: number;
  description: string;
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
  _createdAt: string;
  _id: string;
  _updatedAt: string;
}
