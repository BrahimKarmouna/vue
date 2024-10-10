<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">
          <a href="/">
  <img src="/logo.png" alt="Logo" class="h-20 w-auto"> <!-- Adjust height as needed -->
</a>
         </div>
        <div class="hidden md:flex space-x-4">
          <router-link
            to="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Counter
          </router-link>
          <router-link
            to="/Todos"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Todos
          </router-link>
          <router-link
            to="/Services"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Services
          </router-link>
          <router-link
            to="/contact"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  