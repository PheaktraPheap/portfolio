<template>
  <header
    class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
  >
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-primary-600"
          @click="handleHomeClick"
        >
          Pheap Sopheaktra
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            @click="(e) => handleNavClick(e, link.href)"
          >
            {{ link.name }}
          </NuxtLink>

          <!-- Desktop Theme Toggle -->
          <ThemeToggle />
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden" @click="isOpen = !isOpen">
          <div class="w-6 flex flex-col space-y-1">
            <span class="h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
            <span class="h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
            <span class="h-0.5 w-full bg-gray-600 dark:bg-gray-300"></span>
          </div>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden mt-4 space-y-4">
        <NuxtLink
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          class="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          @click="(e) => handleMobileNavClick(e, link.href)"
        >
          {{ link.name }}
        </NuxtLink>

        <!-- Mobile Theme Toggle -->
        <div class="flex justify-center">
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
  { name: 'Contact', href: '#contact' },
];

const handleNavClick = (e: Event, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToElement(sectionId, 80);
  }
};

const handleMobileNavClick = (e: Event, href: string) => {
  handleNavClick(e, href);
  isOpen.value = false;
};

const handleHomeClick = (e: Event) => {
  if (window.location.pathname === '/') {
    e.preventDefault();
    scrollToTop();
  }
};
</script>
