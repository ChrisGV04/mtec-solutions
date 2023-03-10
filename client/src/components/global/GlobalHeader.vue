<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);
const isMobile = bp.smaller('sm');

const navigation = [
  { title: 'About us', route: '#about' },
  { title: 'Services', route: '#services' },
  { title: 'Contact', route: '#contact' },
];

/** SCROLL EFFECT FUNCTIONALITY */

const wrapper = ref<HTMLElement | null>(null);
const { height: wHeight } = useElementBounding(wrapper);
const { y: scrollPos } = useWindowScroll();

const isScrolled = computed(() => {
  if (!wrapper.value) return false;
  if (scrollPos.value <= wHeight.value / 2) return false;
  return true;
});
</script>

<template>
  <header
    ref="wrapper"
    :class="[
      'fixed inset-x-0 top-0 z-30 bg-transparent transition-all duration-500',
      isScrolled && 'bg-gray-900/80 backdrop-blur backdrop-saturate-150 backdrop-filter',
    ]"
  >
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
