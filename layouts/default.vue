<template>
  <div
    class="min-h-screen flex flex-col
           bg-gradient-to-b from-white to-gray-50
           dark:from-gray-900 dark:to-gray-950
           transition-colors duration-300"
  >
    <!-- Header -->
    <Header />

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Scroll To Top -->
    <ScrollToTop />

    <!-- Footer -->
    <footer
      class="relative mt-24
             border-t border-gray-200 dark:border-gray-800
             bg-white/70 dark:bg-gray-900/70
             backdrop-blur-xl"
    >
      <!-- Accent Line -->
      <div
        class="absolute inset-x-0 top-0 h-px
               bg-gradient-to-r
               from-transparent via-primary-500/60 to-transparent"
      />

      <div
        class="container mx-auto px-6 py-12
               flex flex-col md:flex-row
               items-center justify-between gap-6"
      >
        <!-- Left -->
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} Pheap Sopheaktra.
          <span class="hidden sm:inline">All rights reserved.</span>
        </p>

        <!-- Right -->
        <div class="flex items-center gap-6">
          <a
            href="https://t.me/Pheap_Sopheaktra"
            target="_blank"
            class="text-sm text-gray-600 dark:text-gray-400
                   hover:text-primary-600 dark:hover:text-primary-400
                   transition"
          >
            Telegram
          </a>

          <a
            href="https://github.com"
            target="_blank"
            class="text-sm text-gray-600 dark:text-gray-400
                   hover:text-primary-600 dark:hover:text-primary-400
                   transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'author', content: 'Pheap Sopheaktra' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#7C3AED' },

    // Extra SEO Comfort
    { property: 'og:site_name', content: 'Pheap Sopheaktra Portfolio' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:creator', content: '@PheapSopheaktra' },
    { name: 'twitter:site', content: '@PheapSopheaktra' }
  ],
  link: [
    { rel: 'canonical', href: 'https://pheap-sopheaktra.vercel.app/' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Pheap Sopheaktra",
        "alternateName": "Pheaktra Pheap",
        "url": "https://pheap-sopheaktra.vercel.app/",
        "image": "https://pheap-sopheaktra.vercel.app/profile.jpg",
        "jobTitle": "Full-Stack Developer & API Specialist",
        "description": "Full-stack developer specializing in backend systems, real-time APIs, Laravel, Nuxt, WebSockets, and scalable architecture.",
        "worksFor": {
          "@type": "Organization",
          "name": "Self-employed"
        },
        "sameAs": [
          "https://github.com/PheaktraPheap",
          "https://www.linkedin.com/in/pheap-sopheaktra",
          "https://t.me/Pheap_Sopheaktra"
        ],
      })
    }
  ]
})
</script>

