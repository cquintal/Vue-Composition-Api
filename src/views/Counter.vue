<template>
    <h1>Couuter vue</h1>
    <h2> {{ counter }}</h2>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
    
  
</template>

<script>
import  useCounter  from '@/composables/useCounter'
export default {

    setup(){

        const { counter, increase, decrease} = useCounter()

        return {
            counter, increase, decrease
        }
        //const counter =  ref(5)

        /*const increase = () => {
            counter.value++
        }

        const decrease = () =>{
            counter.value--
        }*/

       /* return {
            counter,
            increase: () => counter.value++ ,
            decrease: () => counter.value--
        }*/
    }

}
</script>

<style>

</style>