<template>
    <div class=" mt-5">
        <div class=" flex gap-3 justify-center mt-2">
            <router-link class=" hover:text-purple-300 transition-all text-2xl font-bold text-gray-900 hover:scale-150" :to="`/by-letter/${letter}`" v-for="letter in letters">
            {{ letter }}
            </router-link>
        </div>
        <div class=" mt-5">
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
    </div>
</template>

<script setup>
import { computed,onMounted,watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route=useRoute();
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const meals=computed(()=>store.state.searchedByLetter);

const fetchMeals = (letter) => {
  store.dispatch("searchMealsByLetter", route.params.letter);
};

onMounted(() => {
  fetchMeals(route.params.letter);
})

watch(() => route.params.letter, (newLetter) => {
  fetchMeals(newLetter);
})

</script>

<style lang="scss" scoped>

</style>