export default defineNuxtConfig({
  srcDir: 'src',

  imports: { dirs: ['stores'] },
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/fontaine'],

  app: {
    head: {
      title: 'MTec Solutions',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=rajdhani@700,600,500&f[]=switzer@600,700,400,500&display=swap',
        },
      ],

      meta: [
        { property: 'og:type', content: 'Website' },
        { property: 'og:title', content: 'MTec Solutions' },
      ],
    },
  },

  typescript: { strict: true },
});
