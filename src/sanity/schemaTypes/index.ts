import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { productCategoryType } from "./productCategoryType";
import { productType } from "./productType";
import { recipeType } from "./recipeType";
import { recipeCategoryType } from "./recipeCategoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    productCategoryType,
    productType,
    recipeType,
    recipeCategoryType,
  ],
};
