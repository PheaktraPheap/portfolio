<template>
    <header class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-primary-600">
            Pheap Sopheaktra
          </NuxtLink>
          
          <div class="hidden md:flex space-x-8">
            <NuxtLink 
              v-for="link in navigation" 
              :key="link.name" 
              :to="link.href"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          
          <!-- Mobile menu button -->
          <button class="md:hidden" @click="isOpen = !isOpen">
            <div class="w-6 flex flex-col space-y-1">
              <span class="h-0.5 w-full bg-gray-600"></span>
              <span class="h-0.5 w-full bg-gray-600"></span>
              <span class="h-0.5 w-full bg-gray-600"></span>
            </div>
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="isOpen" class="md:hidden mt-4 space-y-4">
          <NuxtLink 
            v-for="link in navigation" 
            :key="link.name" 
            :to="link.href"
            class="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            @click="isOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  const isOpen = ref(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]
  </script>