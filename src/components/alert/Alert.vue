<template>
    <div v-if="show" class="alert" :class="alertType">
        <div class="alert__message"><slot /></div>
        <div class="alert__close-btn" data-test="close-btn" @click="onClose">
            <svg
                class="alert__close-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 96 96"
                enable-background="new 0 0 96 96"
                xml:space="preserve"
            >
                <polygon
                    fill="#000000"
                    points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "
                />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

defineOptions({
    name: "vx-alert",
});

interface Props {
    type: string;
}

const props = defineProps<Props>();
const alertType = computed(() => {
    return `alert--${props.type}`;
});

const show = ref(true);
const onClose = () => {
    show.value = false;
};
</script>

<style scoped></style>
