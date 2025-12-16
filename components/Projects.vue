<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A selection of my recent projects showcasing API development and full-stack solutions
        </p>
      </div>

      <!-- Simple 3-column Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <!-- <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          /> -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Pisen Dealer App API',
    description: 'Complete RESTful API for e-commerce with user authentication, product management, and payment integration.',
    image: '/api-project-1.jpg',
    technologies: ['Laravel', 'MySQL', 'Nuxt 2', 'JWT']
  },
  {
    id: 2,
    title: 'ERA App API',
    description: 'School management system with real-time notifications, attendance tracking, and reporting features.',
    image: '/api-project-2.jpg',
    technologies: ['Laravel','MySQL', 'Nuxt 3', 'JWT',]
  },
  {
    id: 3,
    title: 'Fashion App API',
    description: 'Product Clothing e-commerce API with advanced search, filtering, and order processing capabilities.',
    image: '/api-project-3.jpg',
    technologies: ['Laravel','MySQL', 'Nuxt 3', 'JWT',]
  },
]
</script>
