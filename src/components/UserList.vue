<template>
  <ul>
        <!-- <li v-for="user in Users" :key="user.id">
            <h2>hola mundo</h2>
        </li> -->
        <slot v-for="user in Users" 
        :user="user"
        :key="user.id"></slot>
    </ul>

</template>

<script>
export default {
    props: {
        Users: {
            type: Array,
            required: true
        }
    }

}
</script>

<style>
ul{
    list-style: none;
}
</style>