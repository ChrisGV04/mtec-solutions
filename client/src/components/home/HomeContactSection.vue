<script setup lang="ts"></script>

<template>
  <section id="contact">
    <BaseContainer>
      <div class="mx-auto max-w-xl text-center">
        <span class="subtitle text-primary-700">Contact us</span>
        <h2
          class="mt-1 font-display text-3xl font-semibold text-gray-900 sm:text-4xl md:max-w-none xl:text-5xl"
        >
          We're Ready to Service Your Project Needs
        </h2>
      </div>

      <div class="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
        <a href="#" target="_blank" class="group flex flex-col items-center space-y-3 text-center">
          <Icon name="ph:map-pin-line-duotone" class="h-10 w-10 text-primary-500" />
          <span class="font-display text-2xl font-medium text-gray-900 group-hover:text-primary-600"
            >Headquarters</span
          >
          <span class="whitespace-pre-line text-gray-600 group-hover:text-primary-500"
            >8300 FM 1960 West. Suite 450 <br />
            Houston, TX 77070, USA</span
          >
        </a>

        <a href="#" target="_blank" class="group flex flex-col items-center space-y-3 text-center">
          <Icon name="ph:phone-disconnect-duotone" class="h-10 w-10 text-primary-500" />
          <span class="font-display text-2xl font-medium text-gray-900 group-hover:text-primary-600"
            >Call Us</span
          >
          <span class="whitespace-pre-line text-gray-600 group-hover:text-primary-500"
            >US Office: (805) 244-6832<br />
            US Cell Phone: (805) 570-1179<br />
            MX Office: (33) 1596-4076</span
          >
        </a>

        <a href="#" target="_blank" class="group flex flex-col items-center space-y-3 text-center">
          <Icon name="ph:envelope-simple-open-duotone" class="h-10 w-10 text-primary-500" />
          <span class="font-display text-2xl font-medium text-gray-900 group-hover:text-primary-600"
            >Email Us</span
          >
          <span class="whitespace-pre-line text-gray-600 group-hover:text-primary-500">support@mtec.com</span>
        </a>
      </div>
    </BaseContainer>
  </section>
</template>
