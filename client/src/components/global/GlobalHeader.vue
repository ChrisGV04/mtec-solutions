<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);
const isMobile = bp.smaller('sm');

const navigation = [
  { title: 'About us', route: '#about' },
  { title: 'Services', route: '#services' },
  { title: 'Contact', route: '#contact' },
];
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-30">
    <BaseContainer no-y-padding class="flex items-center justify-between py-4 sm:py-6">
      <NuxtLink to="/" class="default-rings rounded-md focus:ring-offset-gray-900">
        <img src="/mtec-logo.webp" alt="MTec Logo" class="h-12 sm:h-16" />
      </NuxtLink>

      <nav class="hidden space-x-10 sm:block">
        <NuxtLink
          :to="link.route"
          v-for="link in navigation"
          class="font-display text-lg font-semibold text-white hover:text-opacity-80"
          >{{ link.title }}</NuxtLink
        >
      </nav>

      <ClientOnly>
        <GlobalMobileMenu :links="navigation" v-if="isMobile" class="sm:hidden" />
      </ClientOnly>
    </BaseContainer>
  </header>
</template>
