<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando ....</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3> {{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{ name:'pokemon-search'}">Regresar</router-link>

  </template>

</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import UsePokemon from '@/composables/UsePokemon'

export default {

    setup() {
        
        const route = useRoute()
       
        //console.log('pokemon prueba', route.params.id)

        const { errorMessage, isLoading, pokemon, searchPokemon } = UsePokemon(route.params.id)
        
        watch(
          () =>  route.params.id,
          (value, prevValue) => {
            //console.log(value, prevValue)
            searchPokemon(route.params.id)
          }
        )

        onBeforeRouteLeave( () =>{
           const asnwer = window.confirm('Esta seguro que desera salir')

           if (!asnwer) return false

        })

        return {
            errorMessage,
            isLoading,
            pokemon
        }

    }

}
</script>

<style>

</style>