<template>
    <div class=" flex flex-col p-8">
        <div>
            <input type="text" class=" rounded focus:outline-none border-2 border-gray-200 w-full" placeholder="Search Meals"/>
        </div>
        <div class=" flex gap-3 justify-center mt-2">
            <router-link :to="`/letter/${letter}`" v-for="letter in letters">
            {{ letter }}
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div v-for="meal in meals" :key="meal.idMeal" class="shadow-lg bg-white rounded-lg overflow-hidden">
              <router-link :to="`/meal/${meal.idMeal}`" class="block">
                <div class="h-[400px] overflow-hidden">
                  <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-full">
                </div>
              </router-link>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ meal.strMeal }}</h3>
                <p class="text-gray-700 font-semibold mb-4">{{ meal.strCategory }}</p>
                <div class="text-center">
                  <a :href="meal.strYoutube" class="inline-block py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition duration-300" target="_blank">Watch on YouTube</a>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import axiosClient from '../axiosClient'

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