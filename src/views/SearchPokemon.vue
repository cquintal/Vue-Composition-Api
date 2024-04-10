<template>
  <h1>Buscas Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onsubmit">
    <input type="number"
            placeholder="Numero Pokemon"
            v-model="pokemonId"
            ref="txtSearchId"
            >
  </form>
  <br>
  <samp> Presione Enter para continuar</samp>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'


export default {

    setup(){

        const router = useRouter()
        const pokemonId = ref(1)
        const txtSearchId = ref()

        onActivated( () => {
            //txtSearchId.value.focus()
            txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,
            onsubmit: () => { 
                //console.log('Pokemon a buscar:' , pokemonId.value)
                router.push({name:'pokemon-id', params : { id: pokemonId.value } })

            } 
        }

    }

}
</script>

<style>

</style>