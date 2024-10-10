<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl font-bold mb-4">Count: {{ count }}</h1>
    <div class="flex space-x-4">
      <button 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        @click="increment"
      >
        Increment
      </button>
      <button 
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        @click="decrement"
      >
        Decrement
      </button>
      <button 
        class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles here if needed */
</style>
