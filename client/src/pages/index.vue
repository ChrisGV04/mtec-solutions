<script setup lang="ts"></script>

<template>
  <div>
    <Body class="antialiased" />
    <DevOnly><BpViewer /></DevOnly>

    <GlobalHeader />

    <main>
      <HomeHeroSection />
      <HomeBrandsSection />
      <HomeAboutSection />
      <HomeVisionSection />
      <HomeServicesSection />
      <HomeContactSection />
    </main>

    <GlobalFooter />
  </div>
</template>
