<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
const reset= () => {
  count.value=0 
}

const decrement = () =>{
  if( count.value > 0){
    count.value--
  }

}
</script>

<template>


  <div>
    <h1>Count: {{  count }}</h1>
    <button class="block"  @click="increment">Increment</button>
    <button  class="block"  @click="decrement"  > decrement</button>
    <button  class="block"  @click="reset"  > reset</button>
  </div>
</template>
