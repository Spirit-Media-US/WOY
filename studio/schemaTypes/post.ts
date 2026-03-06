export default {
  name: 'post',
  title: 'Blog / Resources',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Soul Care', value: 'soul-care' },
        { title: 'Leadership', value: 'leadership' },
        { title: 'Formation', value: 'formation' },
        { title: 'Resources', value: 'resources' },
      ]},
    },
    { name: 'published', title: 'Published', type: 'boolean', initialValue: false },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
}
