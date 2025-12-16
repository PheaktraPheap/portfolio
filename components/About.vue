<template>
  <section
    id="about"
    class="relative py-24
           bg-gray-50 dark:bg-gray-950"
  >
    <div class="container mx-auto px-6">

      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold
                 text-gray-900 dark:text-white"
        >
          About Me
        </h2>
        <p
          class="mt-4 text-lg
                 text-gray-600 dark:text-gray-400"
        >
          Backend-focused developer with experience building reliable APIs
          and modern web applications.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

        <!-- Left: Description -->
        <div>
          <h3
            class="text-xl font-semibold
                   text-gray-900 dark:text-white mb-4"
          >
            Backend & API Development
          </h3>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I primarily work with <strong>Laravel</strong> to design and build
            clean, scalable, and secure APIs. I focus on proper architecture,
            database design, and performance.
          </p>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            On the frontend, I use <strong>Nuxt</strong> when needed to build
            modern user interfaces that communicate efficiently with backend services.
          </p>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            I also have experience working with <strong>Firebase</strong> for
            authentication, notifications, and real-time features, alongside
            <strong>MySQL</strong> for structured data storage.
          </p>
        </div>

        <!-- Right: Skills -->
        <div>
          <h3
            class="text-xl font-semibold
                   text-gray-900 dark:text-white mb-6"
          >
            Technical Focus
          </h3>

          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>
              <p class="text-gray-600 dark:text-gray-300">
                RESTful API design, authentication, authorization
              </p>
            </li>

            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>
              <p class="text-gray-600 dark:text-gray-300">
                Database modeling and optimization using MySQL
              </p>
            </li>

            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>
              <p class="text-gray-600 dark:text-gray-300">
                API documentation, testing, and maintainability
              </p>
            </li>

            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>
              <p class="text-gray-600 dark:text-gray-300">
                Frontend integration with Nuxt & JavaScript
              </p>
            </li>
          </ul>

          <!-- Tech Stack -->
          <div class="mt-8 flex flex-wrap gap-3">
            <span class="px-4 py-2 text-sm rounded-full
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         text-gray-700 dark:text-gray-300">
              Laravel
            </span>
            <span class="px-4 py-2 text-sm rounded-full
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         text-gray-700 dark:text-gray-300">
              MySQL
            </span>
            <span class="px-4 py-2 text-sm rounded-full
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         text-gray-700 dark:text-gray-300">
              Nuxt
            </span>
            <span class="px-4 py-2 text-sm rounded-full
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         text-gray-700 dark:text-gray-300">
              Firebase
            </span>
            <span class="px-4 py-2 text-sm rounded-full
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         text-gray-700 dark:text-gray-300">
              REST API
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
