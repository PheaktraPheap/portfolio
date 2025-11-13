<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Geometric Background -->
    <div class="absolute inset-0">
      <!-- Triangles -->
      <div class="absolute top-10 right-10 w-48 h-48 bg-blue-500/5 clip-triangle"></div>
      <div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/5 clip-triangle-reverse"></div>
      
      <!-- Circles -->
      <div class="absolute top-1/3 left-1/4 w-32 h-32 border-2 border-green-200/30 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-orange-200/30 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
      
      <!-- Grid Dots -->
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 60px 60px;"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Featured Projects
      </h2>
      <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects showcasing API development and full-stack solutions
      </p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Project Image with Overlay -->
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Project Type Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full backdrop-blur-sm">
                {{ project.type }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-bl-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-commerce API Platform',
    description: 'Complete RESTful API for e-commerce with user authentication, product management, and payment integration.',
    image: '/api-project-1.jpg',
    type: 'Backend API',
    technologies: ['Laravel', 'MySQL', 'REST API', 'JWT', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-api'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Full-stack task management application with real-time updates and team collaboration features.',
    image: '/api-project-2.jpg',
    type: 'Full Stack',
    technologies: ['Nuxt 3', 'Laravel', 'WebSocket', 'MySQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/task-manager'
  },
  {
    id: 3,
    title: 'Weather API Service',
    description: 'Custom weather API service with caching, rate limiting, and multiple data source integration.',
    image: '/api-project-3.jpg',
    type: 'API Service',
    technologies: ['Laravel', 'Redis', 'API Integration', 'Caching'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/weather-api'
  },
  {
    id: 4,
    title: 'Authentication Microservice',
    description: 'Standalone authentication service with OAuth2, social login, and multi-factor authentication.',
    image: '/api-project-4.jpg',
    type: 'Microservice',
    technologies: ['Laravel', 'OAuth2', 'JWT', 'Redis', 'Docker'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/auth-service'
  },
  {
    id: 5,
    title: 'Content Management API',
    description: 'Headless CMS API with role-based permissions, media management, and content versioning.',
    image: '/api-project-5.jpg',
    type: 'Backend API',
    technologies: ['Laravel', 'MySQL', 'File Storage', 'Role Management'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/cms-api'
  },
  {
    id: 6,
    title: 'Analytics Dashboard API',
    description: 'Real-time analytics API with data aggregation, reporting endpoints, and visualization support.',
    image: '/api-project-6.jpg',
    type: 'Data API',
    technologies: ['Laravel', 'MySQL', 'Charts', 'Data Processing'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/analytics-api'
  }
]
</script>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.clip-triangle-reverse {
  clip-path: polygon(100% 100%, 0% 100%, 100% 0);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>