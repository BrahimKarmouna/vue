<template>
  <div class="container mx-auto flex justify-center items-center"> 
    <div class="bg-white rounded-lg shadow-md mt-3 p-5 w-full max-w-lg"> 
      <h1 class="text-center text-purple-600">To-Do List</h1> 
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 sm:mt-5"> 
        <div class="col-span-1"> 
          <input 
            type="text" 
            class="border rounded p-2 w-full" 
            placeholder="Add a new task..." 
            v-model="newTask" 
            @keyup.enter="addTask" 
            :disabled="tasks.length >= 5" 
          /> 
        </div> 
        <div class="col-span-1"> 
          <button 
            type="button" 
            class="bg-purple-600 text-white p-2 rounded w-full" 
            @click="addTask" 
            v-if="tasks.length < 5" 
          > 
            Add 
          </button> 
          <p v-else class="text-green-600 font-bold">List completed</p> 
        </div> 
      </div> 

      <!-- Task List -->
      <ul class="mt-4">
        <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
          <span>{{ task.description }}</span>
          <button @click="deleteTask(index)" class="text-red-500">Delete</button>
        </li>
      </ul>
      
      <button @click="deleteAllTasks" class="mt-4 text-gray-500">Reset Task List</button>
    </div> 
  </div> 
</template>

<script>
import { ref, onMounted } from "vue"; 

export default { 
  name: "HomePage", 
  setup() { 
    // Reactive variable for the new task input
    const newTask = ref(""); 

    // Reactive array to hold tasks
    const tasks = ref([ 
      { description: "Review pending activities" }, 
      { description: "Attend daily meetings" }, 
    ]); 

    // Function to add a new task
    const addTask = () => { 
      // Check if the input is empty
      if (!newTask.value) return; 
      
      // Add the new task to the beginning of the tasks array
      tasks.value.unshift({ 
        description: newTask.value, 
      }); 
      
      // Save tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(tasks.value)); 
      
      // Clear the input field
      newTask.value = ""; 
    }; 

    // Function to delete a specific task
    const deleteTask = (index) => { 
      tasks.value.splice(index, 1); // Remove the task at the given index
      localStorage.setItem("tasks", JSON.stringify(tasks.value)); // Update local storage
    }; 

    // Function to delete all tasks
    const deleteAllTasks = () => { 
      tasks.value = []; // Clear the tasks array
      localStorage.removeItem("tasks"); // Remove tasks from local storage
    }; 

    // Load tasks from local storage when the component mounts
    onMounted(() => { 
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) { 
        tasks.value = JSON.parse(savedTasks); // Restore tasks from local storage
      } 
    }); 

    return { 
      newTask, 
      tasks, 
      addTask, 
      deleteTask, 
      deleteAllTasks, 
    }; 
  }, 
}; 
</script> 

<style scoped> 
h1 { 
  color: #a813ff; 
} 

.message { 
  color: green; 
  font-weight: bold; 
} 
</style>
