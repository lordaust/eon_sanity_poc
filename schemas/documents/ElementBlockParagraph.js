export default {
  name: 'elementBlockParagraph',
  title: 'Element Block - Paragraph',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'elementCategory',
      title: 'Element Category',
      type: 'reference',
      to: [{type: 'elementCategory'}], // Reference to the elementCategory type
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    // Add other fields specific to your elementBlockParagraph as needed
    {
      name: 'bgcolor',
      title: 'Background Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bordercolor',
      title: 'Border Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
  ],
}
