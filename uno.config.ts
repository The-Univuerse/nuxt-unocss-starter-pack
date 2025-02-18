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

    animation: {
      keyframes: { shimmer: `{0%, 90%, 100% {background-position: calc(-100% - var(--shimmer-width)) 0} 30% 60% {background-position: calc(100% + var(--shimmer-width)) 0} }` },
      durations: { shimmer: '8s' },
      counts: { shimmer: 'infinite' },
      // animation: { shimmer: 'shimmer 8s infinite' },

    },

  },

})
