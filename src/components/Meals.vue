<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 p-5 sm:p-0">
        <div v-for="meal in meals" :key="meal.idMeal" class="shadow-lg bg-white rounded-lg overflow-hidden">
          <router-link :to="`/meal/${meal.idMeal}`" class="block">
            <div class=" overflow-hidden">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-[350px] h-[200px]">
            </div>
          </router-link>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ meal.strMeal }}</h3>
            <p class="text-gray-700 font-semibold mb-4">{{ meal.strCategory }}</p>
            <div class="text-center flex">
              <a :href="meal.strYoutube" class="inline-block py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition duration-300" target="_blank">Watch on YouTube</a>
            </div>
          </div>
        </div>

        <div v-if="!meals?.length" class=" justify-center ">
          There is no meals
        </div>
      </div>
</template>

<script setup>
 const props=defineProps({
    meals:{
        type: Array,
    }
 })
</script>

<style lang="scss" scoped>

</style>