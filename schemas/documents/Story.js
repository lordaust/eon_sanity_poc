export default {
  name: 'story',
  title: 'Story',
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
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // Adjust as needed
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [{type: 'chapter'}],
        },
      ],
    },
    {
      name: 'newChapters',
      title: 'New Chapters',
      type: 'array',
      of: [{type: 'chapter'}], // Reference to the chapter type
    },
    {
      name: 'callToActionUrl',
      title: 'Call to Action URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkToArticle',
      title: 'Link to Article',
      type: 'boolean',
    },
    {
      name: 'linkedArticle',
      title: 'Linked Article',
      type: 'reference',
      to: [{type: 'article'}],
      weak: true, // Reference of type weak
      hidden: ({document}) => !document.linkToArticle, // Hide the field when "Link to Article" is not toggled on
    },
    // Add other fields specific to your story as needed
  ],
}
