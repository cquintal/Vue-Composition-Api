<template>
  <h1> Aprendiendo Slots</h1>
  <button @click="OpenModal"> Abrir Modal</button>

 <modal v-if="isOpen"
    title="Hola Mundo"
    @on:close="CloseModal">
    <!-- <h2>Titulo del modal</h2>
    <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</P> -->
    <template v-slot:body>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </template>
    <template v-slot:header>
        <h2>Titulo del Modal</h2>
    </template>
   
    <template v-slot:footer>
        <button @click="CloseModal">Salir</button>
    </template>

    <template v-slot:exposed ="{ NewTitle}">
        <h2>{{ NewTitle }}</h2>

    </template>

 </modal>

</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: {
        Modal
    },

    setup(){

        const isOpen = ref(false)
        
        return{
            isOpen,
            OpenModal: () => isOpen.value = true,
            CloseModal: () => isOpen.value = false
        }

    }
}
</script>

<style>

</style>