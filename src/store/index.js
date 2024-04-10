import { createStore } from 'vuex'
import { v4 as uuidv4 }  from 'uuid'

export default createStore({
  state: {
    todos : [
      { id: '1', text: 'recolectar las piedras del infinito', completed: false },
      { id: '2', text: 'piedra del alma', completed: true },
      { id: '3', text: 'piedra del poder', completed: true },
      { id: '4', text: 'piedra de la realidad', completed: false },
      { id: '5', text: 'conseguir nuevos secuaces competentes', completed: false },
    ]
  },
  getters: {

    pendingTodos(state, getters, rootState){

      return state.todos.filter( todo => !todo.completed)

    },
      allTodos: (state, getters, rootState) => {
         return state.todos

    },
    CompletedTodos : (state, getters, rootState) => {
        return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: ( _ , getters) => (tab) => {

      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.CompletedTodos
      }

    }

  },
  mutations: {

    toggleTodo(state, id){
      
      const todoIndex = state.todos.findIndex( todo => todo.id === id)
      state.todos[todoIndex].completed  = !state.todos[todoIndex].completed

    },
    createTodo(state, text = ''){
      
      if(text.length <= 1) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text: text
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
