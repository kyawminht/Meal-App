<template>
    <div class=" mt-5">
        <div class=" flex gap-3 justify-center mt-2">
            <router-link class=" hover:text-purple-300 transition-all text-2xl font-bold text-gray-900 hover:scale-150" :to="`/by-letter/${letter}`" v-for="letter in letters">
            {{ letter }}
            </router-link>
        </div>
        <div class=" mt-5">
          <Meal :meals="meals"/>
        </div>
    </div>
</template>

<script setup>
import Meal from '../components/Meals.vue'
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