<template>
    <div class=" h-full sm:w-[1170px] mx-auto">
        <Navbar/>
        <main class="">
          <router-view/>
        </main>
      </div>
</template>

<script setup>
import Navbar from './Navbar.vue';


</script>

<style lang="scss" scoped>

</style>