<template>
    <div class=" flex flex-col p-8 ">
        <div class="sm:w-[1170px] mx-auto">
            <input type="text" class=" rounded focus:outline-none border-2 border-gray-200 w-full" placeholder="Search Meals"/>
        </div>
        <div class=" flex gap-3 justify-center mt-2">
            <router-link :to="`/letter/${letter}`" v-for="letter in letters">
            {{ letter }}
            </router-link>
        </div>
       
        <Meal :meals="meals"/>
    </div>
</template>

<script setup>

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import axiosClient from '../axiosClient'
import Meal from '../components/Meals.vue'
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const keyword=ref('');
const meals=computed(()=>store.state.searchedMeals);

const searchMeals=()=>{
    store.dispatch("searchMeals",keyword.value);
    console.log("search meal", meals.value)
    console.log(store.state.searchedMeals)
}



</script>

<style lang="scss" scoped>

</style>