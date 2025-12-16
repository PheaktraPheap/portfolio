<template>
  <section
    class="relative min-h-screen flex items-center
           bg-white dark:bg-gray-950"
  >
    <div class="container mx-auto px-6">
      <div class="max-w-5xl">

        <!-- Eyebrow -->
        <p
          class="text-sm uppercase tracking-widest
                 text-gray-500 dark:text-gray-400"
        >
          Portfolio
        </p>

        <!-- Title -->
        <h1
          class="mt-6 text-5xl md:text-7xl
                 font-bold leading-tight
                 text-gray-900 dark:text-white"
        >
          I’m <span class="underline decoration-4 decoration-primary-500">
            Pheap Sopheaktra
          </span><br />
          a web developer
        </h1>

        <!-- Description -->
        <p
          class="mt-8 text-xl
                 text-gray-600 dark:text-gray-300
                 max-w-2xl"
        >
          I build reliable and thoughtful web applications using modern
          technologies. I care about clarity, maintainability, and user experience.
        </p>

        <!-- Actions -->
        <div class="mt-12 flex flex-wrap gap-6">
          <NuxtLink
            to="#projects"
            class="inline-flex items-center gap-2
                   text-lg font-medium
                   text-gray-900 dark:text-white
                   border-b-2 border-gray-900 dark:border-white
                   hover:border-primary-500
                   transition"
            @click="handleProjectsClick"
          >
            View Projects →
          </NuxtLink>

          <NuxtLink
            class="inline-flex items-center gap-2
                   text-lg font-medium
                   text-gray-500 dark:text-gray-400
                   hover:text-primary-600
                   transition"
            @click="handleContactClick"
          >
            Contact Me
          </NuxtLink>
        </div>

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