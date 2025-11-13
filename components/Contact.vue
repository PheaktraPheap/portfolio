<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Geometric Background -->
    <div class="absolute inset-0">
      <!-- Triangles -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 clip-triangle-reverse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 clip-triangle"></div>
      
      <!-- Circles -->
      <div class="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-blue-200/30 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-28 h-28 border-2 border-green-200/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      
      <!-- Grid Dots -->
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Get In Touch
      </h2>
      <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
      </p>
      
      <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        <!-- Contact Information -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you need API development, backend solutions, or full-stack applications, 
              I'd love to hear about your project!
            </p>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="mdi:email" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:pheaktrapheap6@gmail.com" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    pheaktrapheap6@gmail.com
                  </a>
                </div>
              </div>
              
              <!-- GitHub -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="mdi:github" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h4>
                  <a href="https://github.com/PheaktraPheap" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    @PheaktraPheap
                  </a>
                </div>
              </div>
              
              <!-- LinkedIn -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="mdi:linkedin" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/pheap-sopheaktra" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    pheap-sopheaktra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="submitForm" class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                >
              </div>

              <div class="space-y-2">
                <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Your subject"
                >
              </div>
            </div>
            
            <div class="space-y-2 mb-6">
              <label for="project-type" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Project Type
              </label>
              <select
                id="project-type"
                v-model="form.project_type"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
              >
                <option value="">Select project type</option>
                <option value="api-development">API Development</option>
                <option value="backend-development">Backend Development</option>
                <option value="full-stack">Full Stack Project</option>
                <option value="consultation">Technical Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="space-y-2 mb-8">
              <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Project Details *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                placeholder="Tell me about your project, timeline, and requirements..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
            >
              <Icon 
                v-if="loading" 
                name="svg-spinners:ring-resize" 
                class="w-5 h-5" 
              />
              <Icon 
                v-else 
                name="mdi:send" 
                class="w-5 h-5" 
              />
              <span>{{ loading ? 'Sending Message...' : 'Send Message' }}</span>
            </button>

            <!-- Success/Error Messages -->
            <div v-if="successMessage" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:check-circle" class="w-5 h-5" />
                <span>{{ successMessage }}</span>
              </div>
            </div>
            
            <div v-if="errorMessage" class="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:alert-circle" class="w-5 h-5" />
                <span>{{ errorMessage }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  project_type: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const clearMessages = () => {
  successMessage.value = ''
  errorMessage.value = ''
}

const submitForm = async () => {
  // Clear previous messages
  clearMessages()
  
  // Validate form
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = 'Please fill in all required fields.'
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    successMessage.value = 'Thank you for your message! I\'ll get back to you within 24 hours.'
    
    // Reset form
    form.value = { name: '', email: '', project_type: '', message: '' }
    
  } catch (error: any) {
    console.error('Error sending message:', error)
    errorMessage.value = 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
  } finally {
    loading.value = false
    
    // Clear success message after 5 seconds
    if (successMessage.value) {
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    }
  }
}
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