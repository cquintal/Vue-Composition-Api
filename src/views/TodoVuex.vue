<template>
  <h1>Lista de Tarea de Thanos</h1>
  <!-- <h4> Tareas: {{ $store.state.todos.length}}</h4> -->
  <h4> Pendientes:  {{ pending.length }}</h4>
  <hr>
  <button 
  :class="{ 'active': currentTab === 'all' }"
  @click="currentTab = 'all'"
  >
  Todos
</button>
  <button 
  :class="{ 'active': currentTab === 'pending' }"
  @click="currentTab = 'pending'"
  >
  Pendientes
</button>
  <button 
  :class="{ 'active': currentTab === 'completed' }"
  @click="currentTab = 'completed'"
  >
  Completados
</button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
      :class="{ 'completed': todo.completed }"
      @dblclick="toggleTodo(todo.id)">
          {{ todo.text }}
      </li>
    </ul>
  </div>
  
  <button @click="isOpen=true"> Crear Todo </button>

  <modal v-if="isOpen"
    @on:close="isOpen=false">
    <template v-slot:header>
      <h2>Nueva Tarea</h2>
    </template>
     <template v-slot:body>
      <form @submit.prevent="createTodo(NewTodoText); isOpen=false" >
        <input type="text"
        placeholder="Nueva Tarea"
        v-model="NewTodoText">
      </form>
      <br><br>
      <button type="submit">Crear</button>
     </template>
    
  </modal>
  
</template>

<script>
import UseTodos from '@/composables/UseTodos'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
  components: { Modal },

  setup(){

     /*const store = useStore()
     const currentTab = ref('all')*/

     const { pending, currentTab, getTodosByTab, toggleTodo, createTodo } = UseTodos()
     /*const toggleTodo = (id) => {

      store.commit('toggleTodo', id)

     }*/
     
     return {
      pending,
      currentTab,
      /*pending: computed( ()=> store.getters['pendingTodos']),
      all: computed( ()=> store.getters['allTodos']),
      completed: computed( ()=> store.getters['CompletedTodos']),*/
      getTodosByTab,

      //Methods
      toggleTodo,
      createTodo,
      isOpen: ref(false),
      NewTodoText: ref('')
     
     }

  }

}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width:  300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}

</style>