<template>
    <Transition
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutRight"
    >
        <div
            v-if="showNotification"
            class="notification__card"
            :class="[type ? 'notification-' + type : '']"
        >
            <span class="notification__icon">
                <span v-html="icons[type as keyof typeof icons]"></span>
            </span>
            <span class="notification__message"> {{ message }}</span>

            <div class="notification__close-btn" @click="onClose">
                <svg
                    class="notification__close-svg"
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
    </Transition>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, render } from "vue";

defineOptions({
    name: "vx-notification",
});

interface Props {
    type: string;
    message: string;
    permanent: boolean;
    timeout?: number;
    element: HTMLElement;
}

const props = withDefaults(defineProps<Props>(), {
    type: "success",
    timeout: 3000,
    permanent: false,
});

const showNotification = ref(false);
const icons = {
    primary: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" ></path> </svg>`,
    secondary: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" ></path> </svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" ></path> </svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" ></path> </svg>`,
    danger: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M11,15H13V17H11V15M11,7H13V13H11V7"></path></svg>`,
    light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" ></path> </svg>`,
    dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" > <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" ></path> </svg>`,
};

onBeforeMount(() => {
    if (!props.permanent) {
        setTimeout(() => {
            removeComponent();
        }, props.timeout);
    }
});

onMounted(() => {
    showNotification.value = true;
});

const onClose = () => {
    removeComponent();
};

const removeComponent = () => {
    showNotification.value = false;
    setTimeout(() => {
        render(null, props.element);
        if (props.element.parentNode) {
            props.element.parentNode.removeChild(props.element);
        }
    }, 500);
};
</script>

<style scoped></style>
