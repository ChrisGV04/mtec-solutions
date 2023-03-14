import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  labels: {
    plural: 'Media',
    singular: 'Media',
  },
  admin: { useAsTitle: 'alt' },
  upload: {
    staticURL: '/payload-uploads',
    staticDir: '../public/uploads',
    mimeTypes: ['image/*'],
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Descriptive text',
      admin: { description: 'Text to describe the image for screen readers' },
    },
  ],
};

export default Media;
