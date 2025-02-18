import { defineConfig, presetWind, presetTypography } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetTypography(), presetWind({dark: 'media'})]
})
