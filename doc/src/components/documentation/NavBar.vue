<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar__logo">
                <router-link :to="{ name: 'home' }" class="navbar__logo-link">
                    {{ appName }}</router-link
                >
            </div>
            <div class="navbar__collapse">
                <div class="navbar__buttons">
                    <ul class="navbar__buttons-list">
                        <li class="navbar__button-item">
                            <router-link
                                :to="{ name: 'home' }"
                                class="navbar__button-link"
                                >Home</router-link
                            >
                        </li>
                        <li class="navbar__button-item">
                            <router-link
                                :to="{ name: 'welcome' }"
                                class="navbar__button-link"
                                >Documentation</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>

            <div class="navbar__social"><!-- social --></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="scss" scoped>
@import "@/assets/scss/documentation/components/navbar";
</style>
