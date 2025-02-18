<script lang="ts" setup>
import type { MaybeElement } from '@vueuse/core'

const el = useTemplateRef<MaybeElement>('el')
const counterStore = useNumberCounter()
const { t } = useI18n()
const { counter } = storeToRefs(counterStore)
const { playState } = useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 80%)' },
    { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
)

const description = ref('The Univuerse ')

const title = computed(() => `${t('routes.about').charAt(0).toUpperCase()}${t('routes.about').slice(1)}`)

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
  <div class="h-full w-full flex items-center justify-center p-5 text-white">
    <div class="flex flex-col gap-3 text-white">
      <p
        ref="el"
        :class="{ '-translate-y-1/2': playState === 'finished' }"
        class="from-indigo-500 via-sky-500 to-emerald-500 from-10% to-90% via-30% bg-gradient-to-br bg-clip-text text-6xl text-transparent font-extrabold tracking-tight transition duration-500 ease-in-out md:text-9xl"
      >
        The Univuerse
      </p>

      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <p
          v-if="playState === 'finished'"
          class="text-secondary mt-3 text-center text-lg font-medium md:text-xl"
        >
          {{ $t('tagline') }} univuerse
        </p>
      </Transition>

      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <div
          v-if="playState === 'finished'"
          class="mt-3 flex justify-center gap-3"
        >
          <button
            class="w-10 flex cursor-pointer items-center justify-center rounded-lg bg-neutral-400 px-3 py-1"
            @click="counter--"
          >
            <Icon
              name="tabler:minus"
              class="text-lg"
            />
          </button>

          <span class="text-black dark:text-neutral-400">{{ counter }}</span>

          <button
            class="w-10 flex cursor-pointer items-center justify-center rounded-lg bg-neutral-400 px-3 py-1"
            @click="counter++"
          >
            <Icon
              name="tabler:plus"
              class="text-lg"
            />
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>
