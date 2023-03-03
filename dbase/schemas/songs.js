export default {
  name: 'songs',
  title: 'Songs',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'number',
      type: 'string',
      title: 'Number',
    },
    {
      name: 'posturl',
      type: 'string',
      title: 'PostUrl',
    },
    {
      name: 'downloadurl',
      type: 'string',
      title: 'Downloadurl',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    },
  ],
}
