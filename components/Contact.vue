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
                <span class="text-gray-600 dark:text-gray-300">your.email@example.com</span>
              </div>
              <div class="flex items-center space-x-4">
                <Icon name="mdi:github" class="w-6 h-6 text-primary-600" />
                <a href="https://github.com/yourusername" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  github.com/yourusername
                </a>
              </div>
              <div class="flex items-center space-x-4">
                <Icon name="mdi:linkedin" class="w-6 h-6 text-primary-600" />
                <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const submitForm = async () => {
    // Here you can integrate with a service like Formspree, EmailJS, or your backend
    console.log('Form submitted:', form.value)
    
    // Reset form
    form.value = { name: '', email: '', message: '' }
    
    // Show success message (you can use a toast notification here)
    alert('Thank you for your message! I\'ll get back to you soon.')
  }
  </script>