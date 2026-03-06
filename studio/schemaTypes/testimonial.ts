export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'name', title: 'Name or Initials', type: 'string' },
    { name: 'role', title: 'Role / Title', type: 'string', description: 'e.g. "Senior Pastor, TX"' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote' },
  },
}
