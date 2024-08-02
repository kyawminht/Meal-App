<template>
  <div class=" mt-5">
     
      <div class=" mt-5">
          <Meals :meals="meals"/>
      </div>
  </div>
</template>

<script setup>

import { computed,onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

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