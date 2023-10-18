<template>
    <div class="multi-image-slide">
        <button
            class="multi-image-slide__btn multi-image-slide__btn--pre"
            @click="moveSlide('prev')"
        >
            <img :src="arrow" alt="" class="multi-image-slide__btn-img" />
        </button>
        <button
            class="multi-image-slide__btn multi-image-slide__btn--next"
            @click="moveSlide('next')"
        >
            <img :src="arrow" alt="" class="multi-image-slide__btn-img" />
        </button>
        <div class="multi-image-slide__container" ref="productContainers">
            <slot>
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="multi-image-slide__slide"
                >
                    <div class="multi-image-slide__image">
                        <img
                            :src="image"
                            class="multi-image-slide__image-thumb"
                            alt=""
                        />
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
    name: "vx-multi-image-slide",
});

interface Props {
    images?: string[];
    arrow?: string;
}

withDefaults(defineProps<Props>(), {
    images: () => [
        "/slides/multi-image/card1.jpg",
        "/slides/multi-image/card2.jpg",
        "/slides/multi-image/card3.jpg",
        "/slides/multi-image/card4.jpg",
        "/slides/multi-image/card5.jpg",
        "/slides/multi-image/card6.jpg",
        "/slides/multi-image/card7.jpg",
        "/slides/multi-image/card8.jpg",
        "/slides/multi-image/card9.jpg",
        "/slides/multi-image/card10.jpg",
    ],
    arrow: "/slides/multi-image/arrow.png",
});

const productContainers = ref<HTMLElement | null>(null);

const moveSlide = (direction: string) => {
    if (productContainers.value) {
        let containerDimensions =
            productContainers.value.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        // console.log(containerWidth);

        if (direction === "next") {
            productContainers.value.scrollLeft += containerWidth;
        } else {
            productContainers.value.scrollLeft -= containerWidth;
        }
    }
};
</script>

<style lang="scss" scoped>
//@import "./src/assets/scss/vuxel/components/multi-image-slide";
</style>
