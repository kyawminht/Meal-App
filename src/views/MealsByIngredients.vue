<template>
  <div class=" mt-5">
     
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

              <div v-if="!meals.length" class=" justify-center ">
                There is no meals
              </div>
            </div>
      </div>
  </div>
</template>

<script setup>
import { computed,onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route=useRoute();
const meals=computed(()=>store.state.searchedByIngredients);

const fetchMeals = (ingredients) => {
store.dispatch("searchMealsByIngredients", route.params.ingredients);
};

onMounted(() => {
fetchMeals();
console.log("ingredients",meals)
})

</script>

<style lang="scss" scoped>

</style>