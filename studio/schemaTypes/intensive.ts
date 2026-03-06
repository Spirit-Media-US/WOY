export default {
  name: 'intensive',
  title: 'Intensives',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'duration', title: 'Duration', type: 'string', description: 'e.g. "3-Day Intensive"' },
    { name: 'format', title: 'Format', type: 'string', description: 'e.g. "In-Person / Residential"' },
    { name: 'whoIsThisFor', title: 'Who Is This For', type: 'array', of: [{ type: 'string' }] },
    { name: 'whatToExpect', title: 'What to Expect', type: 'array', of: [{ type: 'block' }] },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline', media: 'image' },
  },
}
