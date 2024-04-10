<template>
  <h2 v-if="isLoading"> Espere por favor ... </h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="Users.length > 0">
    <ul>
        <li v-for="user in Users" :key="user.id">
            <h4>{{ user.first_name }} {{ user.last_name }}</h4>
            <h6> {{ user.email }}</h6>
        </li>
    </ul>
  </div>
  <button @click="previewsPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span> Pagina: {{  currentPage }}</span>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {

    setup(){
        
        const Users = ref([])
        const isLoading = ref(true)
        const currentPage = ref(1)
        const errorMessage = ref()

        const getUsers = async( page = 1) => {
            
            if (page <= 0) page = 1
            isLoading.value = true
            
            const { data } = await axios.get('https://reqres.in/api/users', {
                params: {
                    page: page
                }
            })
            
            if (data.data.length > 0){
                Users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            } else if ( currentPage.value > 0){
                errorMessage.value = 'No hay mas Usuarios'
            }
            isLoading.value = false
            console.log( data.data)

        }

        getUsers()

        return {

            Users, currentPage, isLoading, errorMessage,
            nextPage: () => getUsers(currentPage.value + 1),
            previewsPage: () => getUsers(currentPage.value - 1)
        }

    }

}
</script>

<style scoped>

h2{
    text-align: center;
    width: 100%;
}

div{

    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
}

</style>