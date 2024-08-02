<template>
    <div class=" h-full bg-gray-100">
        <Navbar/>
        <main class="bg-gray-100 sm:w-[1170px] mx-auto">
          <router-view/>
        </main>
      </div>
</template>

<script setup>
import Navbar from './Navbar.vue';


</script>

<style lang="scss" scoped>

</style>