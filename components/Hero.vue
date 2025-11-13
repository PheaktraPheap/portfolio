<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
    <!-- Geometric Background -->
    <div class="absolute inset-0">
      <!-- Large Triangles -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 clip-triangle"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 clip-triangle-reverse"></div>
      
      <!-- Circles -->
      <div class="absolute top-1/4 right-1/4 w-48 h-48 border-2 border-blue-200/30 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 left-1/4 w-32 h-32 border-2 border-green-200/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      
      <!-- Grid Dots -->
      <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Animated Lines -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer" style="animation-delay: 2s;"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
        Hi, I'm 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Pheap Sopheaktra
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        A passionate developer specializing in modern web technologies. I create beautiful and functional digital experiences.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <NuxtLink 
      to="#projects"
      class="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg active:scale-95 text-center"
      @click="handleProjectsClick"
    >
      View My Work
    </NuxtLink>
    <NuxtLink 
      to="#contact"
      class="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg active:scale-95 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 text-center"
      @click="handleContactClick"
    >
      Get In Touch
    </NuxtLink>
  </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Handle Projects click
const handleProjectsClick = (e: Event) => {
  e.preventDefault();
  scrollToProjects();
};

// Handle Contact click
const handleContactClick = (e: Event) => {
  e.preventDefault();
  scrollToContact();
};

// Scroll functions
const scrollToProjects = () => {
  if (process.client) {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

const scrollToContact = () => {
  if (process.client) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};
</script>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.clip-triangle-reverse {
  clip-path: polygon(100% 100%, 0% 100%, 100% 0);
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite;
}
</style>