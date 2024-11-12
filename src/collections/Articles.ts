import { CollectionConfig, FieldHook } from "payload/types";
import { slugField } from "../fields/slug";

const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "website",
      type: "relationship",
      relationTo: "projects",
      hasMany: false,
      required: true,
      label: "Website",
    },
    {
      name: "title",
      defaultValue: "New Article",
      type: "text",
      required: true,
      label: "Title",
    },
    slugField(),
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Content",
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "articleCategories",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "tags",
      admin: {
        position: "sidebar",
      },
      type: "array",
      label: "Tags",
      minRows: 2,
      maxRows: 10,
      interfaceName: "singleTag",
      labels: {
        singular: "Tag",
        plural: "Tags",
      },
      fields: [
        {
          name: "tagName",
          type: "text",
        },
        slugField("tagName"),
      ],
    },
  ],
};

export default Articles;
