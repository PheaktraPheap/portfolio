<template>
  <div 
    v-if="showButton"
    class="fixed bottom-6 right-6 z-50"
  >
    <button
      @click="handleScrollToTop"
      :disabled="isScrolling"
      class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg 
             hover:from-blue-600 hover:to-purple-700 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
             disabled:opacity-50 disabled:cursor-not-allowed group"
      aria-label="Scroll to top"
    >
      <!-- Main Icon -->
      <Icon 
        v-if="!isScrolling"
        name="material-symbols:arrow-upward" 
        class="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-300"
      />
      
      <!-- Loading Spinner -->
      <Icon 
        v-else
        name="svg-spinners:90-ring" 
        class="w-6 h-6"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const showButton = ref(false);
const isScrolling = ref(false);
const scrollThreshold = 300;

const scrollToTop = () => {
  if (!process.client || isScrolling.value) return;
  
  isScrolling.value = true;

  // Simple smooth scroll without page reload
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Reset scrolling state after scroll completes
  setTimeout(() => {
    isScrolling.value = false;
  }, 500);
};

const handleScrollToTop = (event: Event) => {
  event.preventDefault(); // Prevent any default behavior
  scrollToTop();
};

const handleScroll = () => {
  if (process.client) {
    showButton.value = window.scrollY > scrollThreshold;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>