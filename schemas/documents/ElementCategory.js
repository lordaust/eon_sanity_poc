// elementCategory.js
export default {
  name: 'elementCategory',
  title: 'Element Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    },
    // Add other fields specific to your element categories as needed
  ],
}
