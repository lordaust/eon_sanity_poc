export default {
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: ['top', 'bottom'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sticky',
      title: 'Sticky',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Elements',
      type: 'array',
      of: [
        {
          type: 'elementBlockParagraph',
          preview: {
            select: {
              title: 'name',
              media: 'bordercolor',
            },
          },
        },
        {
          type: 'elementBlockQuote',
          preview: {
            select: {
              title: 'name',
              media: 'author',
            },
          },
        },
        // Add more element types as needed
      ],
    },
    // Add other fields specific to your chapter as needed
  ],
}
