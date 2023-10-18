<template>
    <component :is="tag" class="btn" :class="type"><slot /></component>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
    name: "vx-button",
});

interface Props {
    tag?: string;
    btnType?: string;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
});

const type = computed(() => {
    return `btn--${props.btnType}`;
});
</script>

<style scoped></style>
