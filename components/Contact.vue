<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-12">
      
      <!-- Left Side: Contact Links -->
      <div class="space-y-8 flex flex-col justify-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Reach out to me via email, GitHub, or LinkedIn. I'd love to collaborate on projects and discuss ideas.
        </p>

        <!-- Contact Links -->
        <div class="space-y-4">
          <!-- Email -->
          <div class="flex items-center space-x-4 group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:email" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <a href="mailto:pheaktrapheap6@gmail.com" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              pheaktrapheap6@gmail.com
            </a>
          </div>

          <!-- GitHub -->
          <div class="flex items-center space-x-4 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:github" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <a href="https://github.com/PheaktraPheap" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              PheaktraPheap
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-center space-x-4 group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:linkedin" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <a href="https://www.linkedin.com/in/pheap-sopheaktra" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pheap-Sopheaktra
            </a>
          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <form @submit.prevent="submitForm" class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg space-y-6">
        <!-- Email -->
        <div class="space-y-2">
          <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            required
            placeholder="your.email@example.com"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
          >
        </div>

        <!-- Subject -->
        <div class="space-y-2">
          <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            v-model="form.subject"
            required
            placeholder="Subject of your message"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
          >
        </div>

        <!-- Message -->
        <div class="space-y-2">
          <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Message *
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            placeholder="Write your message here..."
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
        >
          <Icon v-if="loading" name="svg-spinners:ring-resize" class="w-5 h-5" />
          <Icon v-else name="mdi:send" class="w-5 h-5" />
          <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
        </button>

        <!-- Messages -->
        <div v-if="successMessage" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
          {{ errorMessage }}
        </div>
      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({ email: '', subject: '', message: '' })
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.value.email || !form.value.subject || !form.value.message) {
    errorMessage.value = 'Please fill in all required fields.'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    await $fetch('/api/telegram', { method: 'POST', body: form.value })
    successMessage.value = 'Message sent successfully! I will get back to you soon.'
    form.value = { email: '', subject: '', message: '' }
  } catch (err) {
    console.error(err)
    errorMessage.value = 'Failed to send message. Please try again later.'
  } finally {
    loading.value = false
    if (successMessage.value) setTimeout(() => successMessage.value = '', 5000)
  }
}
</script>
