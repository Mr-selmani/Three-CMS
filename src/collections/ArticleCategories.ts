import { CollectionConfig } from 'payload/types';
import { slugField } from '../fields/slug';

const ArticleCategories: CollectionConfig = {
  slug: 'articleCategories',
  admin: {
    useAsTitle: 'categoryName',
  },
  fields: [
    {
      name: 'categoryName',
      label: 'Category Name',
      type: 'text',
      defaultValue: 'New Category',
      required: true,
    },
    slugField("categoryName"),
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    }
  ],
}

export default ArticleCategories
