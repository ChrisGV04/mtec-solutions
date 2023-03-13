<script setup lang="ts"></script>

<template>
  <section id="about" class="relative z-0 overflow-hidden">
    <BaseContainer class="grid gap-10 md:grid-cols-2 lg:gap-20">
      <div>
        <span class="subtitle text-primary-700">About us</span>
        <h2
          class="mt-1 max-w-md font-display text-3xl font-semibold text-gray-900 sm:text-4xl md:max-w-none xl:text-5xl"
        >
          World Class Electronics Remanufacturing Services
        </h2>

        <div class="mt-8 space-y-4 text-gray-900 md:text-lg">
          <p>
            M Tec Solutions LLC is a passionate, flexible, fast paced and committed organization that provides
            world class electronics remanufacturing services to our customers.
          </p>

          <p>
            Our extensive electronics remanufacturing knowledge coupled with our understanding of diverse
            markets makes us the ideal partner to meet all your aftermarket electronics needs.
          </p>

          <p>
            We strive to be recognized within the Electronic OEM's (Original Equipment Manufacturer) as one of
            the most reliable service providers for our customers remanufacturing needs in Latin America and
            the United States.
          </p>
        </div>
      </div>

      <img
        alt=""
        class="w-full rounded object-cover object-center md:h-[80vh] md:min-h-full"
        src="https://images.pexels.com/photos/9241760/pexels-photo-9241760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </BaseContainer>

    <DecorFadedLines class="absolute top-0 right-0 -z-10 w-[42rem] max-w-full opacity-30" />
    <DecorFadedLines
      class="absolute bottom-0 left-0 -z-10 w-[42rem] max-w-full rotate-180 transform opacity-30"
    />
  </section>
</template>
