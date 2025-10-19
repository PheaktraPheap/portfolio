<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Get In Touch
      </h2>
      
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Let's work together
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <Icon name="mdi:email" class="w-6 h-6 text-primary-600" />
              <span class="text-gray-600 dark:text-gray-300">pheaktrapheap6@gmail.com</span>
            </div>
            <div class="flex items-center space-x-4">
              <Icon name="mdi:github" class="w-6 h-6 text-primary-600" />
              <a href="https://github.com/PheaktraPheap" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                github.com/PheaktraPheap
              </a>
            </div>
            <div class="flex items-center space-x-4">
              <Icon name="mdi:linkedin" class="w-6 h-6 text-primary-600" />
              <a href="https://www.linkedin.com/in/pheap-sopheaktra" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                linkedin.com/in/pheap-sopheaktra
              </a>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Your full name"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="your.email@example.com"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            :disabled="loading"
            class="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
          </button>

          <!-- Success/Error Messages -->
          <div v-if="successMessage" class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {{ successMessage }}
          </div>
          
          <div v-if="errorMessage" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
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
    const response = await $fetch('/api/telegram', {
      method: 'POST',
      body: form.value
    })

    successMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    
    // Reset form
    form.value = { name: '', email: '', message: '' }
    
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