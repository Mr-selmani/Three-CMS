import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 500,
        height: 281,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      defaultValue: 'Untitled Media',
      required: true,
    },
  ],
}

export default Media