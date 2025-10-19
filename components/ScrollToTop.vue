<template>
  <div class="fixed bottom-8 right-8 z-50">
    <!-- Progress Circle -->
    <div 
      v-if="showButton" 
      class="absolute -inset-2"
      :style="{
        background: `conic-gradient(#3b82f6 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`
      }"
      :class="[
        'rounded-full transition-opacity duration-300',
        showButton ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>
    
    <!-- Main Button -->
    <button
      v-if="showButton"
      @click="handleScrollToTop"
      class="relative p-4 bg-white dark:bg-gray-900 text-primary-600 hover:text-primary-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group border border-gray-200 dark:border-gray-700"
      aria-label="Scroll to top"
      :style="{ 
        transform: showButton ? 'scale(1)' : 'scale(0)',
        opacity: showButton ? 1 : 0
      }"
    >
      <Icon 
        name="material-symbols:expand-circle-up" 
        class="w-6 h-6 transform transition-transform group-hover:-translate-y-0.5"
      />
      
      <!-- Tooltip -->
      <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Scroll to top
        <div class="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
// Direct scroll function - no need for composable if having issues
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

const handleScrollToTop = () => {
  scrollToTop();
};

const showButton = ref(false);
const scrollProgress = ref(0);
const scrollThreshold = 10;

const updateScrollProgress = () => {
  if (process.client) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    scrollProgress.value = scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
    showButton.value = scrollProgress.value >= scrollThreshold;
  }
};

const handleScroll = () => {
  updateScrollProgress();
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial check
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>