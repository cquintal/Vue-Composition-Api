
import { ref } from 'vue'
import  axios  from 'axios'

const useUsers = () => {

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

export default useUsers