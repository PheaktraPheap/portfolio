<template>
  <header
    class="fixed top-0 left-0 right-0 z-50
           bg-white/70 dark:bg-gray-950
           backdrop-blur-xl
           border-b border-gray-200/60 dark:border-gray-800/60
           shadow-sm"
  >
    <!-- Accent Line -->
    <div
      class="absolute inset-x-0 -bottom-px h-px
             bg-gradient-to-r
             from-transparent via-primary-500/60 to-transparent"
    />

    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">

        <!-- Brand -->
        <NuxtLink
          to="/"
          class="text-xl md:text-2xl font-extrabold tracking-tight
                 bg-gradient-to-r from-primary-500 to-violet-500
                 bg-clip-text text-transparent
                 hover:opacity-90 transition"
          @click="handleHomeClick"
        >
          Pheap <span class="font-light">Sopheaktra</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            class="relative text-sm font-medium
                   text-gray-600 dark:text-gray-300
                   hover:text-primary-600 dark:hover:text-primary-400
                   transition-colors
                   after:absolute after:-bottom-1 after:left-0
                   after:h-0.5 after:w-0 after:bg-primary-500
                   after:transition-all after:duration-300
                   hover:after:w-full"
            @click="(e) => handleNavClick(e, link.href)"
          >
            {{ link.name }}
          </NuxtLink>

          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg
                 hover:bg-gray-100 dark:hover:bg-gray-800
                 transition"
          @click="isOpen = !isOpen"
        >
          <div class="w-7 flex flex-col gap-1.5">
            <span class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200"></span>
            <span class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200"></span>
            <span class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden mt-6 rounded-2xl
               bg-white/90 dark:bg-gray-900/90
               backdrop-blur-xl
               border border-gray-200 dark:border-gray-800
               shadow-lg p-6 space-y-5"
      >
        <NuxtLink
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          :target="link.external ? '_blank' : '_self'"
          class="block text-sm font-medium
                 text-gray-700 dark:text-gray-200
                 hover:text-primary-600 dark:hover:text-primary-400
                 transition"
          @click="(e) => handleMobileNavClick(e, link.href)"
        >
          {{ link.name }}
        </NuxtLink>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-800
                    flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ThemeToggle.vue';

const isOpen = ref(false);
const { scrollToTop, scrollToElement } = useScrollToTop();

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: 'https://t.me/Pheap_Sopheaktra', external: true },
];

// Handle navigation clicks
const handleNavClick = (e: Event, link: { href: string; external?: boolean }) => {
  // If it's an internal anchor link
  if (link.href.startsWith('#')) {
    e.preventDefault();
    const sectionId = link.href.substring(1);
    scrollToElement(sectionId, 80);
  } 
  // If external link, allow normal behavior
  else if (link.external) {
    // Do nothing, browser will open the link
  } 
  // If it's the home page link
  else if (link.href === '/') {
    e.preventDefault();
    scrollToTop();
  }
};

// For mobile menu: handle click + close menu
const handleMobileNavClick = (e: Event, link: { href: string; external?: boolean }) => {
  handleNavClick(e, link);
  isOpen.value = false;
};

// Home logo click
const handleHomeClick = (e: Event) => {
  if (window.location.pathname === '/') {
    e.preventDefault();
    scrollToTop();
  }
};
</script>

