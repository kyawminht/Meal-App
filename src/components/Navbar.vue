<template>
  <div class="bg-white">
    <header class=" sm:w-[1170px] mx-auto h-16 flex justify-between items-center">
      <div>
        <img src="../assets/logo/Foodlogo.svg" class=" w-[50px] h-[50px] rounded-full" alt="">
      </div>

      <div class="">
        <router-link
          :to="{ name: 'by-name' }"
          class="inline-flex items-center px-2 transition-colors hover:bg-purple-100 text-2xl text-gray-900"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'by-letter' }"
          class="inline-flex items-center px-2 transition-colors hover:bg-purple-100 text-2xl text-gray-900"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex items-center px-2 transition-colors hover:bg-purple-100 text-2xl text-gray-900"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
