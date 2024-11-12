import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      defaultValue: 'New Website',
      type: 'text',
      required: true,
    },
    { 
      name: 'metaTitle',
      label: 'Meta title',
      type: 'text',
      required: true,
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'textarea',
    },
    {
      name: 'url',
      label: 'Website URL',
      type: 'text',
    },
  ],
}

export default Projects
