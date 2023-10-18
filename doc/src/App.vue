<template>
    <div id="app">
        <NavBar />
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import NavBar from "./components/documentation/NavBar.vue";
</script>

<style lang="scss">
@import "@/assets/scss/documentation/app.scss";
</style>
