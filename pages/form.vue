<script setup lang="ts">
const form = ref <UserValidation> ()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const { t } = useI18n()

const description = ref('The Univuerse ')

const title = computed(() => `${t('routes.form').charAt(0).toUpperCase()}${t('routes.form').slice(1)}`)

// Form Event Validate https://vee-validate.logaretm.com/v4/api/form/#slots
const submit = async () => {
  try {
    const valid = await form.value?.validate()

    if (valid?.valid) {
      alert('Submit Success')
    }
  }
  catch (error) {
    throw error
  }
}

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
  <div class="text-accent h-full w-full flex items-center justify-center p-5 dark:text-white">
    <div class="dark:bg-secondary/30 w-[450px] flex flex-col gap-3 rounded-xl bg-gray-200 p-5 shadow-2xl">
      <FormObserver ref="form">
        <FieldProvider
          v-slot="{ errors, field }"
          v-model="email"
          name="email"
          :label="$t('form.email')"
          rules="required|email"
        >
          <p class="mb-1">
            {{ $t('form.email') }}
          </p>
          <input
            v-bind="field"
            class="border-secondary w-full border-2 rounded-lg p-2 focus:outline-none"
            type="text"
          />
          <p
            v-if="errors"
            class="mt-2 text-sm text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <FieldProvider
          v-slot="{ errors, field }"
          v-model="password"
          name="password"
          :label="$t('form.password')"
          rules="required"
        >
          <p class="mb-1">
            {{ $t('form.password') }}
          </p>
          <input
            v-bind="field"
            class="border-secondary w-full border-2 rounded-lg p-2 focus:outline-none"
            type="password"
          />
          <p
            v-if="errors"
            class="mt-2 text-sm text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <FieldProvider
          v-slot="{ errors, field }"
          v-model="confirmPassword"
          name="username"
          :label="$t('form.confirmPassword')"
          rules="confirmed:@password"
        >
          <p class="mb-1">
            {{ $t('form.confirmPassword') }}
          </p>
          <input
            v-bind="field"
            class="border-secondary w-full border-2 rounded-lg p-2 focus:outline-none"
            type="password"
          />

          <p
            v-if="errors"
            class="mt-2 text-sm text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <div class="text-end">
          <button
            class="cursor-pointer rounded-lg bg-white px-4 py-1 text-black"
            @click="submit"
          >
            {{ $t('form.submit') }}
          </button>
        </div>
      </FormObserver>
    </div>
  </div>
</template>
