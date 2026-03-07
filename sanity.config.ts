import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'work-on-yourself',
  title: 'Work On Yourself',
  projectId: 'u8tg0g1c',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), media()],
  schema: { types: schemaTypes },
})
