<template>
    <div>
        <div class="container">
            <SideBar />
            <main class="content">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from "../components/documentation/SideBar.vue";
</script>

<style lang="scss" scoped></style>
