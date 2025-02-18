<script setup lang="ts">
import NuxtIconDark from '@/assets/icon/nuxt-dark.png'
import NuxtIconLight from '@/assets/icon/nuxt-light.png'
import TailwindcssDark from '@/assets/icon/tailwindcss-dark.svg'
import TailwindcssLight from '@/assets/icon/tailwindcss-light.svg'

const colorMode = useColorMode()
const { t } = useI18n()

const description = ref('Welcome to the universe, Save your crucial time with our univuerse ')

const title = computed(() => `${t('routes.home').charAt(0).toUpperCase()}${t('routes.home').slice(1)}`)
const featuresList = computed(() => {
  return [
    {
      icon: 'logos:nuxt-icon',
      href: 'https://nuxt.com/',
    },
    {
      icon: 'logos:unocss',
      href: 'https://tailwindcss.com/',
    },
    {
      icon: 'logos:pinia',
      href: 'https://pinia.vuejs.org/',
    },
    {
      icon: 'logos:pwa',
      href: 'https://vite-pwa-org.netlify.app/',
    },
    {
      icon: 'logos:vueuse',
      href: 'https://vueuse.org/',
    },
    {
      icon: 'devicon:veevalidate',
      href: 'https://vee-validate.logaretm.com/v4/',
    },
    {
      icon: 'devicon:eslint',
      href: 'https://eslint.org/',
    },
  ]
})
const nuxtIcon = computed(() => colorMode.value === 'light' ? NuxtIconLight : NuxtIconDark)
const tailwindcssIcon = computed(() => colorMode.value === 'light' ? TailwindcssLight : TailwindcssDark)
const headHero = computed(() => colorMode.value === 'light' ? 'text-accent' : 'text-transparent bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text')

useSeoMeta({
  titleTemplate: '%s - %siteName',
  title: title.value,
  // og title is not effected by titleTemplate, we can use template params here if we need
  ogTitle: '%s - %siteName',

  twitterTitle: '%s - %siteName',
  // ogImage: 'http://localhost:3000/__og-image__/image/og.png',

  description: description.value,
  ogDescription: description.value,
  // explicit twitter title is only needed when we want to display something just for X
  twitterDescription: description.value,
})

defineOgImageComponent('Default', {
  title: 'Welcome To The Univuerse',
  description: description.value,
})
</script>

<template>
  <div class="relative h-full flex items-center justify-center text-white">
    <ClientOnly>
      <div class="relative flex flex-col">
        <div class="flex justify-center">
          <NuxtLink
            href="https://github.com/The-Univuerse/nuxt-tailwind-starter-pack"
            target="_blank"
          >
            <div class="group border border-black/5 rounded-full bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <ShimmerText class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:(text-neutral-600 duration-300 dark:text-neutral-400)">
                ✨ {{ $t('followus') }} github
                <Icon
                  name="tabler:arrow-narrow-right"
                  class="ml-1 size-3 text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </ShimmerText>
            </div>
          </NuxtLink>
        </div>

        <h1
          class="mt-8 text-center text-6xl font-extrabold tracking-tight md:text-9xl"
          :class="headHero"
        >
          {{ $t('welcome') }} the <br />

          <span class="from-indigo-500 via-sky-500 to-emerald-500 from-10% to-90% via-30% bg-gradient-to-br bg-clip-text text-transparent">
            Univuerse
          </span>
        </h1>

        <p class="text-secondary mt-3 text-center text-lg font-medium md:text-xl">
          {{ $t('tagline') }} univuerse
        </p>

        <div class="mt-10 flex items-center justify-center gap-5">
          <img
            class="w-32 sm:w-36"
            :src="nuxtIcon"
            alt=""
          />
          <Icon
            name="tabler:plus"
            class="text-secondary self-end text-3xl"
          />
          <img
            class="w-32 self-center sm:w-40"
            :src="tailwindcssIcon"
            alt=""
          />
        </div>

        <div class="flex justify-center">
          <div class="mt-16 w-[250px] flex flex-wrap items-center justify-center gap-5 sm:w-full">
            <NuxtLink
              v-for="(data, index) in featuresList"
              :key="index"
              :href="data.href"
              target="_blank"
              class="w-auto flex items-center"
            >
              <Icon
                :name="data.icon"
                class="text-secondary cursor-pointer text-3xl transition duration-300 ease-in-out dark:hover:text-white"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
