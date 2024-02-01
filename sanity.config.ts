import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Eon',

  projectId: 'c91xz8tq',
  dataset: 'production',

  plugins: [colorInput(), structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
