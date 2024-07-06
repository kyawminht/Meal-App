<template>
    <div class=" h-full bg-gray-100">
        <Navbar/>
        <main class="bg-gray-100">
          <router-view/>
        </main>
      </div>
</template>

<script setup>
import Navbar from './Navbar.vue';


</script>

<style lang="scss" scoped>

</style>