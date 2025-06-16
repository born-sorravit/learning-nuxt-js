<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <nav class="shadow">
        <div
          class="container mx-auto w-full flex justify-center py-5 space-x-10"
        >
          <NuxtLink to="/" class="hover:text-gray-500">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-500">About</NuxtLink>
          <NuxtLink to="/todos" class="hover:text-gray-500">Todos</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <div class="pt-5">
        <slot />
      </div>
    </main>

    <footer class="bg-gray-100 py-4 text-center">
      <div class="text-sm text-gray-500">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
