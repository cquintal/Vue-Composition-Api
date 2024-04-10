import { ref } from 'vue'
import  axios  from 'axios'


const UsePokemon = (pokemonId = '1') => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async(id) => {

        if(!id) return

        isLoading.value = true
        pokemon.value =  null
        
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)

            //console.log(data);
            pokemon.value = data
            errorMessage.value = null
            //console.log(data)

        } catch (error) {
            errorMessage.value = 'no se pudo cargar el pokemon'
        }
        isLoading.value = false
    }

    searchPokemon(pokemonId)

return {
    errorMessage,
    isLoading,
    pokemon,
    searchPokemon
}

}

export default UsePokemon