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
import useUsers from '@/composables/useUsers'
export default {

    setup(){
        

        const { Users, currentPage, isLoading, errorMessage,nextPage, previewsPage} = useUsers()

        return {

            Users, 
            currentPage, 
            isLoading,
             errorMessage,
             nextPage,
              previewsPage

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