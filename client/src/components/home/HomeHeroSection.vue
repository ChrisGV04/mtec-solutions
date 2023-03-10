<script setup lang="ts"></script>

<template>
  <section class="relative z-0 grid h-[80vh] min-h-[38rem] place-items-end bg-gray-900/70 md:min-h-[45rem]">
    <BaseContainer>
      <div class="max-w-2xl">
        <h1 class="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Quality Support and Engineering Services
        </h1>

        <p class="mt-5 text-white sm:text-lg">
          We are a reliable, flexible and adaptive engineering company that provides competitive and high
          quality electronics remanufacturing services.
        </p>

        <div class="mt-8 flex flex-col gap-5 sm:mt-16 sm:flex-row">
          <NuxtLink to="#contact" class="btn btn-primary default-rings focus:ring-offset-gray-900"
            >Contact Us</NuxtLink
          >

          <NuxtLink to="#services" class="btn btn-secondary default-rings focus:ring-offset-gray-900"
            >Services</NuxtLink
          >
        </div>
      </div>
    </BaseContainer>

    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-gray-900 opacity-70"></div>

    <!-- TODO: Convert to picture -->
    <img
      role="presentation"
      class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80"
    />
  </section>
</template>
