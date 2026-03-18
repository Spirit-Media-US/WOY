export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { 
      name: 'siteName', 
      title: 'Site Name', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'tagline', 
      title: 'Tagline', 
      type: 'string' 
    },
    { 
      name: 'defaultMetaDescription', 
      title: 'Default Meta Description', 
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'companyLegalName', 
      title: 'Company Legal Name (for footer)', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'heroHeadline', 
      title: 'Hero Headline', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'heroSubtext', 
      title: 'Hero Subtext', 
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'heroImage', 
      title: 'Hero Image', 
      type: 'image', 
      options: { hotspot: true } 
    },
    { 
      name: 'aboutKevin', 
      title: 'About Kevin (for WOY)', 
      type: 'array', 
      of: [{ type: 'block' }] 
    },
    { 
      name: 'kevinPhoto', 
      title: 'Kevin Photo', 
      type: 'image', 
      options: { hotspot: true } 
    },
    { 
      name: 'email', 
      title: 'Contact Email', 
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    { 
      name: 'phone', 
      title: 'Phone Number', 
      type: 'string' 
    },
    { 
      name: 'applicationUrl', 
      title: 'Application / Begin Conversation URL', 
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'facebook', 
      title: 'Facebook URL', 
      type: 'url' 
    },
    { 
      name: 'instagram', 
      title: 'Instagram URL', 
      type: 'url' 
    },
    { 
      name: 'youtube', 
      title: 'YouTube URL', 
      type: 'url' 
    },
  ],
}
