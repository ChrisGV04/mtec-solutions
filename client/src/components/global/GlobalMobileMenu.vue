<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  TransitionRoot,
  TransitionChild,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/vue';

defineProps({
  links: { type: Array<{ title: string; route: any }>, required: true },
});
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverButton
      aria-label="Open menu"
      class="default-rings grid h-8 w-8 place-items-center rounded-md focus:ring-offset-gray-900"
    >
      <Icon name="heroicons:bars-2-solid" class="h-6 w-6 text-white" />
    </PopoverButton>

    <TransitionRoot>
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverOverlay class="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm" />
      </TransitionChild>
    </TransitionRoot>

    <TransitionChild
      as="template"
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-150 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-xl bg-white p-8 ring-1 ring-gray-900/5"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-medium text-gray-900 text-opacity-80">Navigation</h2>

          <PopoverButton aria-label="Close menu" class="default-rings -m-1 rounded-md p-1">
            <Icon name="heroicons:x-mark-solid" class="h-6 w-6 text-gray-500" />
          </PopoverButton>
        </div>

        <nav class="mt-6">
          <ul class="-my-2 divide-y divide-gray-100 text-base text-gray-900">
            <li v-for="link in links" :key="link.title">
              <NuxtLink @click="close" :to="link.route" class="default-rings block rounded-md py-2">{{
                link.title
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </PopoverPanel>
    </TransitionChild>
  </Popover>
</template>
