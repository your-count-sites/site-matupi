import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const recipeType = defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "title",
      type: "string",
    },
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Ingredient Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              title: "Step to follow",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "prepTime",
      title: "Preparation Time",
      type: "string",
    },
    {
      name: "difficult",
      title: "Difficult",
      type: "string",
    },
    {
      name: "servings",
      title: "Servings",
      type: "string",
    },

    defineField({
      name: "category",
      type: "reference",
      to: { type: "recipeCategory" },
    }),
  ],
});
