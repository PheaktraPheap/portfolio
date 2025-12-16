export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '', // So Tailwind's `dark:` works directly
    preference: 'dark', // <-- default to dark mode
    fallback: 'dark'    // fallback if no preference is saved
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Pheap Sopheaktra – Full-Stack Developer & API Specialist',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth' // optional for smooth scrolling
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Pheap Sopheaktra – Full-stack developer specializing in API development, backend solutions, and full-stack applications.' },
        { name: 'keywords', content: 'Pheap Sopheaktra, Portfolio, Full Stack Developer, Laravel, Nuxt, API Development, Web Developer' },
        { name: 'author', content: 'Pheap Sopheaktra' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph (Facebook, LinkedIn, etc.)
        { property: 'og:title', content: 'Pheap Sopheaktra – Full-Stack Developer & API Specialist' },
        { property: 'og:description', content: 'Portfolio showcasing my projects in API development, full-stack solutions, and backend systems.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yourdomain.com' },
        { property: 'og:image', content: 'https://yourdomain.com/og-image.png' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pheap Sopheaktra – Full-Stack Developer & API Specialist' },
        { name: 'twitter:description', content: 'Portfolio showcasing my projects in API development, full-stack solutions, and backend systems.' },
        { name: 'twitter:image', content: 'https://yourdomain.com/og-image.png' },
        { name: 'twitter:creator', content: '@PheaktraPheap' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    }
  },
  ssr: true,
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  }
})