<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <slot />
      </main>
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-6 text-center">
          <p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>