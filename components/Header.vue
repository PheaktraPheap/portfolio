<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-950 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm"
  >
    <!-- Accent Line -->
    <div
      class="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"
    />

    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Left: Logo + Profile Image -->
        <div class="flex items-center gap-4">
          <!-- Profile Image -->
          <img
            src="/profile.jpg"
            alt="Pheap Sopheaktra"
            class="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-primary-500 shadow-md transition-transform hover:scale-105"
          />

          <!-- Logo/Name -->
          <NuxtLink
            to="/"
            class="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-500 to-violet-500 bg-clip-text text-transparent hover:opacity-90 transition flex items-center"
            @click="handleHomeClick"
          >
            Pheap <span class="font-light ml-1">Sopheaktra</span>
          </NuxtLink>
        </div>

        <!-- Center: Desktop Navigation -->
        <div
          class="hidden md:flex items-center gap-10 absolute right-1/4 transform -translate-x-1/2"
        >
          <NuxtLink
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            class="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
            @click="(e) => handleNavClick(e, link)"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Right: Theme Toggle + Contact Button -->
        <div class="flex items-center gap-4">
          <!-- Desktop: Contact Button -->
          <a
            href="https://t.me/Pheap_Sopheaktra"
            target="_blank"
            class="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary-500 to-violet-500 text-white rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact
          </a>

          <ThemeToggle />

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isOpen = !isOpen"
          >
            <div class="w-7 flex flex-col gap-1.5">
              <span
                class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200 transition-transform"
                :class="isOpen ? 'rotate-45 translate-y-2' : ''"
              ></span>
              <span
                class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200 transition-opacity"
                :class="isOpen ? 'opacity-0' : ''"
              ></span>
              <span
                class="h-0.5 w-full rounded bg-gray-700 dark:bg-gray-200 transition-transform"
                :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden mt-6 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 space-y-5"
      >
        <!-- Mobile Profile -->
        <div
          class="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-800"
        >
          <img
            src="/profile.jpg"
            alt="Pheap Sopheaktra"
            class="w-12 h-12 rounded-full border-3 border-primary-500"
          />
          <div>
            <p class="font-bold text-gray-900 dark:text-white">
              Pheap Sopheaktra
            </p>
            <p class="text-sm text-primary-600 dark:text-primary-400">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <NuxtLink
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          class="flex items- justify-between py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition group"
          @click="(e) => handleMobileNavClick(e, link)"
        >
          <span>{{ link.name }}</span>
          <Icon
            name="mdi:chevron-right"
            class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </NuxtLink>

        <!-- Mobile Contact Button -->
        <a
          href="https://t.me/Pheap_Sopheaktra"
          target="_blank"
          class="block w-full text-center py-3 mt-4 bg-gradient-to-r from-primary-500 to-violet-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all"
        >
          Contact on Telegram
        </a>

        <div
          class="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-center"
        >
          <!-- <ThemeToggle /> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from "~/components/ThemeToggle.vue";

const isOpen = ref(false);
const { scrollToTop, scrollToElement } = useScrollToTop();

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

// Handle navigation clicks
const handleNavClick = (
  e: Event,
  link: { href: string; external?: boolean }
) => {
  // If it's an internal anchor link
  if (link.href.startsWith("#")) {
    e.preventDefault();
    const sectionId = link.href.substring(1);
    scrollToElement(sectionId, 80);
  }
  // If external link, allow normal behavior
  else if (link.external) {
    // Do nothing, browser will open the link
  }
  // If it's the home page link
  else if (link.href === "/") {
    e.preventDefault();
    scrollToTop();
  }
};

// For mobile menu: handle click + close menu
const handleMobileNavClick = (
  e: Event,
  link: { href: string; external?: boolean }
) => {
  handleNavClick(e, link);
  isOpen.value = false;
};

// Home logo click
const handleHomeClick = (e: Event) => {
  if (window.location.pathname === "/") {
    e.preventDefault();
    scrollToTop();
  }
};
</script>
