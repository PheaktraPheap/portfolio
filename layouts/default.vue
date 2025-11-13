<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Header />
    <main>
      <slot />
    </main>

    <!-- This will auto-import from components/ScrollToTop.vue -->
    <ScrollToTop />

    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Pheap Sopheaktra. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
if (process.client) {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>
