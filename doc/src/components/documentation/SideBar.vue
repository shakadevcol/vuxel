<template>
    <aside class="sidebar-menu">
        <h3>Getting Start</h3>
        <ul class="sidebar-menu__list">
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'installation' }"
                    class="sidebar-menu__list-link"
                    >Installation</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'about' }"
                    class="sidebar-menu__list-link"
                    >About</router-link
                >
            </li>
        </ul>
        <h3>UI Components</h3>
        <ul>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'alert' }"
                    class="sidebar-menu__list-link"
                    >Alert</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'button' }"
                    class="sidebar-menu__list-link"
                    >Button</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'carousel' }"
                    class="sidebar-menu__list-link"
                    >Carousel</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'dialog' }"
                    class="sidebar-menu__list-link"
                    >Dialog</router-link
                >
            </li>

            <!-- <li class="sidebar-menu__list-item">
                <router-link :to="{ name: 'simple-slide' }" class="sidebar-menu__list-link"
                    >Simple Slide</router-link
                >
            </li>-->
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'multiImageSlide' }"
                    class="sidebar-menu__list-link"
                    >Multi image slide</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'notification' }"
                    class="sidebar-menu__list-link"
                    >Notification</router-link
                >
            </li>
            <li class="sidebar-menu__list-item">
                <router-link
                    :to="{ name: 'progress' }"
                    class="sidebar-menu__list-link"
                    >Progress</router-link
                >
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/documentation/components/sidebar";
</style>
