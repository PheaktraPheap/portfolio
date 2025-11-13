<template>
  <section id="about" class="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
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
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        About My API Work
      </h2>
      
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Side - API Visual -->
        <div class="relative">
          <!-- API Architecture Diagram -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-semibold text-gray-900 dark:text-white">API Architecture</h4>
              <div class="flex gap-1">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
            
            <!-- API Flow Visualization -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Icon name="material-symbols:api" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div class="flex-1">
                  <div class="h-2 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                </div>
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Icon name="material-symbols:database" class="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Icon name="material-symbols:security" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div class="flex-1">
                  <div class="h-2 bg-purple-200 dark:bg-purple-800 rounded-full"></div>
                </div>
                <div class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Icon name="material-symbols:cloud" class="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </div>
            
            <!-- Status Indicators -->
            <div class="mt-6 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Endpoints</span>
              <span>Security</span>
              <span>Database</span>
            </div>
          </div>
          
          <!-- Floating Tech Badges -->
          <div class="absolute -top-3 -right-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1 shadow-lg">
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">RESTful</span>
          </div>
          <div class="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-lg px-3 py-1 shadow-lg">
            <span class="text-sm font-medium text-green-600 dark:text-green-400">JSON</span>
          </div>
        </div>

        <!-- Right Side - Content -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            API Developer & Backend Specialist
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I specialize in building <span class="font-semibold text-blue-600 dark:text-blue-400">robust and scalable APIs</span> 
            using modern backend technologies. My expertise lies in creating efficient data exchange systems 
            that power web applications and services.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            With a strong focus on <span class="font-semibold text-purple-600 dark:text-purple-400">clean architecture</span> 
            and <span class="font-semibold text-green-600 dark:text-green-400">performance optimization</span>, 
            I develop APIs that are maintainable, secure, and capable of handling high traffic loads.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I believe in writing <span class="font-semibold text-orange-600 dark:text-orange-400">well-documented code</span> 
            and following <span class="font-semibold text-indigo-600 dark:text-indigo-400">best practices</span> 
            to ensure long-term project success and easy collaboration.
          </p>
          
          <!-- Core API Skills -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">API Development Focus:</h4>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Icon name="material-symbols:check-circle" class="w-4 h-4" />
                <span>RESTful APIs</span>
              </div>
              <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Icon name="material-symbols:check-circle" class="w-4 h-4" />
                <span>Authentication</span>
              </div>
              <div class="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Icon name="material-symbols:check-circle" class="w-4 h-4" />
                <span>Database Design</span>
              </div>
              <div class="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Icon name="material-symbols:check-circle" class="w-4 h-4" />
                <span>Performance</span>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-800">
              Laravel
            </span>
            <span class="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-800">
              MySQL
            </span>
            <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-800">
              REST API
            </span>
            <span class="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full border border-orange-200 dark:border-orange-800">
              JavaScript
            </span>
            <span class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full border border-indigo-200 dark:border-indigo-800">
              Git
            </span>
            <span class="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full border border-red-200 dark:border-red-800">
              Postman
            </span>
          </div>
        </div>
      </div>

      <!-- API Principles Section -->
      <div class="mt-16 max-w-3xl mx-auto">
        <h4 class="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
          API Development Principles
        </h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="material-symbols:architecture" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h5 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clean Architecture</h5>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Well-structured, maintainable code with separation of concerns</p>
          </div>
          <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="material-symbols:shield-lock" class="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h5 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Security First</h5>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Robust authentication and data protection measures</p>
          </div>
          <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="material-symbols:speed" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h5 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">High Performance</h5>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Optimized queries and efficient data handling</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>