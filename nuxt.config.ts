// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Remove the css array or use correct path
  // css: ['~/assets/css/main.css'], // Remove this line
  modules: [
    '@nuxt/icon'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Your Name - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your professional portfolio website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: true
})