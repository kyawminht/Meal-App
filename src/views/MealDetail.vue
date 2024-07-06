<template>
    <div class="mt-5 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <img :src="meal.strMealThumb" alt="Meal Thumbnail" class="w-full md:w-48 h-auto rounded-lg object-cover">
        <div class="text-center md:text-left">
          <h1 class="text-2xl font-bold text-gray-900">{{ meal.strMeal }}</h1>
          <p class="text-gray-600">{{ meal.strCategory }} | {{ meal.strArea }}</p>
          <a :href="meal.strYoutube" target="_blank" class="text-blue-500 hover:underline">Watch on YouTube</a>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-900">Ingredients</h2>
        <ul class="list-disc list-inside">
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient }} - {{ measures[index] }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-900">Instructions</h2>
        <p class="text-gray-700 whitespace-pre-line">{{ meal.strInstructions }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import axiosClient from '../axiosClient';
  import { onMounted, ref } from 'vue';
  
  const meal = ref({});
  const ingredients = ref([]);
  const measures = ref([]);
  const route = useRoute();
  const id = route.params.id;
  
  const fetchMealById = () => {
    axiosClient.get(`lookup.php?i=${id}`)
      .then(({ data }) => {
        meal.value = data.meals[0];
        ingredients.value = Object.keys(meal.value)
          .filter(key => key.startsWith('strIngredient') && meal.value[key])
          .map(key => meal.value[key]);
        measures.value = Object.keys(meal.value)
          .filter(key => key.startsWith('strMeasure') && meal.value[key])
          .map(key => meal.value[key]);
      })
      .catch(error => {
        console.error("Error fetching meal data:", error);
      });
  };
  
  onMounted(() => {
    fetchMealById();
  });
  </script>

<style lang="scss" scoped>

</style>