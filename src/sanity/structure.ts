import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("product").title("Product"),
      S.documentTypeListItem("productCategory").title("ProductCategory"),
      S.documentTypeListItem("recipe").title("Recipe"),
      S.documentTypeListItem("recipeCategory").title("RecipeCategory"),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["product", "productCategory", "recipe", "recipeCategory"].includes(
            item.getId()!
          )
      ),
    ]);
