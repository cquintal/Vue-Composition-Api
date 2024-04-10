<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ iroman}}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIroman">Iroman</button>
    <button @click="changeHulk">Hulk</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
  name: 'HomeView',

  setup(){

    const iroman = ref({ name: 'Tony', age: 50})
    const hulk = reactive({ name: 'Bruce', age: 50}) // el reactive solo funciona con objetos

    return {
      iroman, hulk,

       changeIroman: () => {

        iroman.value.name = 'Tony stark'
        iroman.value.age = 55
       },

       changeHulk: () =>{
        hulk.name = 'Bruce hulk'
        hulk.age = 45
       }

    }

  }
  
}
</script>
