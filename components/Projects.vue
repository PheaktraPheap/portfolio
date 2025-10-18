<template>
    <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex space-x-4">
                <a 
                  v-if="project.demoUrl" 
                  :href="project.demoUrl" 
                  target="_blank"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Live Demo
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
                >
                  GitHub
                </a>
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
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with Vue.js and Node.js',
      image: '/images/project1.jpg',
      technologies: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'Node.js'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/images/project2.jpg',
      technologies: ['React', 'Firebase', 'TypeScript'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts',
      image: '/images/project3.jpg',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/yourusername/project3'
    }
  ]
  </script>