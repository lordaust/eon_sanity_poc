// articleCategory.js
export default {
  name: 'articleCategory',
  title: 'Article Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug/URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // Adjust as needed
      },
      validation: (Rule) => Rule.required(),
    },
    // Add other fields specific to your article categories (e.g., description, image, etc.)
  ],
}
