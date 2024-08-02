<template>
    <div>
        <div class=" pt-8">
            <input type="text" class=" rounded focus:outline-none border-2 border-gray-200 w-full" placeholder="Search Meals by name" 
            v-model="keyword"
            @change="searchMeals"
            />
        </div>
        <div v-if="loading" class="">
          Loading
        </div>

        <Meal :meals="meals"/>

          <div v-if="!meals?.length" class=" flex justify-center text-2xl font-bold text-gray-900">
            There are no meals
          </div>
    </div>
</template>

<script setup>
import { computed, ref,onMounted } from 'vue';
import store from '../store'
import Meal from '../components/Meals.vue'
const keyword=ref('');
const meals=computed(()=>store.state.searchedMeals);
const loading=computed(()=>store.state.loading);


const searchMeals=()=>{
    store.dispatch("searchMeals",keyword.value);
    console.log("search meal", meals.value)
}


</script>

<style lang="scss" scoped>

</style>