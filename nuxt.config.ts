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
      title: 'Pheap Sopheaktra | Full-Stack Developer & API Specialist',
      meta: [
        { charset: 'utf-8' },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: 'description',
          content: 'Portfolio of Pheap Sopheaktra – Full-stack developer specializing in API development, backend solutions, and modern web applications.'
        },
        {
          name: 'keywords',
          content: 'Pheap Sopheaktra, Portfolio, Web Developer, Full-Stack, API, Laravel, Nuxt, Tailwind CSS'
        },

        // Open Graph
        { property: 'og:title', content: 'Pheap Sopheaktra | Full-Stack Developer' },
        { property: 'og:description', content: 'Portfolio showcasing API development, backend solutions, and full-stack projects.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pheap-sopheaktra.vercel.app/' },
        {
          property: 'og:image',
          content: 'https://pheap-sopheaktra.vercel.app/social-preview.png'
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pheap Sopheaktra | Full-Stack Developer' },
        { name: 'twitter:description', content: 'Portfolio showcasing API development, backend solutions, and full-stack projects.' },
        {
          name: 'twitter:image',
          content: 'https://pheap-sopheaktra.vercel.app/social-preview.png'
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    }
  },
  ssr: true,
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },
})