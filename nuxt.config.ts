// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'The Univuerse',
      charset: 'utf-8',
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
    pageTransition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`

    allow: [
      '/',
      '/about',
      '/form',
    ],
  },
  i18n: {
    lazy: true,
    baseUrl: process.env.NUXT_BASE_URL,
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        language: 'en',
        file: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        language: 'fr',
        file: 'fr',
        name: 'France',
      },
    ],
  },
  pinia: { storesDirs: ['./stores/**'] },
  icon: {
    class: 'icon', // default <Icon> class applied
    mode: 'css', //
    serverBundle: {
      collections: [
        'tabler',
        'logos',
        'line-md',
        'devicon',
      ],
      externalizeIconsJson: true,
    },
  },
})
