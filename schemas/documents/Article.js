// article.js
export default {
  name: 'article',
  title: 'Article',
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
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'articleCategory'}], // Assuming you have a separate 'articleCategory' type
      validation: (Rule) => Rule.required(),
    },
    // Add other typical fields for an article as needed (e.g., author, publishedDate, tags, etc.)
  ],
}
