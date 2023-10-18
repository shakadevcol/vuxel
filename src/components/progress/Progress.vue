<template>
    <div class="progress" :class="progressType">
        <div class="progress__bar" :style="{ width: percentageProgress }">
            <div class="progress__text">
                {{ percentageProgress }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
    name: "vx-progress",
});

interface Props {
    type?: string;
    percentage?: number;
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary",
    percentage: 0,
});
const progressType = computed(() => {
    return `progress--${props.type}`;
});
const percentageProgress = computed(() => {
    if (props.percentage < 0) {
        return "0%";
    } else if (props.percentage > 100) {
        return "100%";
    }
    return `${props.percentage}%`;
});
</script>

<style scoped></style>
