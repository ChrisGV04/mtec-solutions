<script setup lang="ts"></script>

<template>
  <header class="bg-primary-50">
    <BaseContainer
      no-y-padding
      class="flex flex-col items-center py-4 sm:flex-row sm:justify-between sm:py-6"
    >
      <NuxtLink to="/" class="default-rings rounded focus:ring-offset-primary-50">
        <img src="/mtec-logo.webp" alt="MTec Logo" class="h-12 sm:h-16" />
      </NuxtLink>

      <span class="mt-4 text-center text-primary-700 sm:text-right"
        >&copy; {{ new Date().getFullYear() }} MQS. All rights reserved &mdash; Developed by
        <a
          target="_blank"
          href="https://globalic.com.mx"
          class="default-rings rounded font-display font-bold uppercase underline focus:ring-offset-primary-50"
          >Global IC</a
        ></span
      >
    </BaseContainer>
  </header>
</template>
