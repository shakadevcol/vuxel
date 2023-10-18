<template>
    <Transition>
        <div v-if="modelValue" class="dialog">
            <div class="dialog__card">
                <div class="dialog__header">
                    <h3 class="dialog__title" data-test="title">{{ title }}</h3>
                    <button
                        class="dialog__close"
                        data-test="close-button"
                        @click="emit('update:modelValue', false)"
                    ></button>
                </div>
                <div
                    class="dialog__content"
                    data-test="message"
                    v-html="message"
                ></div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
defineOptions({
    name: "vx-dialog",
});

defineProps<{
    title: string;
    message: string;
    modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
