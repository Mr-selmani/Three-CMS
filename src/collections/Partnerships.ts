import { CollectionConfig } from 'payload/types';

const Partnerships: CollectionConfig = {
  slug: 'partnerships',
  admin: {
    useAsTitle: 'partnerName',
  },
  fields: [
    {
      name: 'partnerName',
      label: 'Partner Name',
      type: 'text',
      defaultValue: 'New Partnership',
      required: true,
    },
    {
      label: 'Partner with',
      name: 'website',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      label: 'Partner Logo',
      name: 'partnerLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    }
  ],
}

export default Partnerships
