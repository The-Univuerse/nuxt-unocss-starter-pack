import {
  defineConfig,
  presetTypography,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetTypography(),
    presetWind({ dark: 'class' }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  theme: {
    colors: {
      background: 'var(--background)',
      secondary: 'var(--secondary)',
      primary: 'var(--primary)',
      accent: 'var(--accent)',

    },
  },

})
