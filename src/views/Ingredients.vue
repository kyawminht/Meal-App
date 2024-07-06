<template>
    <div>
      <div class=" mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link :to="`/ingredients/${ingredient.strIngredient}`" 
            v-for="ingredient in ingredients" 
            :key="ingredient.idIngredient" 
            class="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">{{ ingredient.strIngredient }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue';
import axiosClient from '../axiosClient';


const ingredients=ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list")
  .then(({data})=>{
    ingredients.value=data.meals
  })
})
</script>

<style lang="scss" scoped>

</style>