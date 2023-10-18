<template>
    <div>
        <div class="carousel" data-carousel>
            <button
                class="carousel__btn carousel__btn--prev"
                @click="onButtonClick('prev')"
                data-test="prev-btn"
            >
                <img :src="arrow" alt="" class="carousel__btn-img" />
            </button>
            <button
                class="carousel__btn carousel__btn--next"
                @click="onButtonClick('next')"
                data-test="next-btn"
            >
                <img :src="arrow" alt="" class="carousel__btn-img" />
            </button>
            <ul ref="slides" class="carousel__slides">
                <li
                    v-for="(slide, index) in slideList"
                    :key="index"
                    class="carousel__slide"
                    :class="{
                        'carousel__slide--active': index === activeSlide,
                    }"
                    data-test="slide"
                >
                    <img
                        :src="slide.src"
                        :alt="slide.alt"
                        class="carousel__slide-img"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
    name: "vx-carousel",
});

type Slide = {
    src: string;
    alt: string;
};

interface Props {
    slideList: Slide[];
    arrow?: string;
}

const props = defineProps<Props>();

const activeSlide = ref(0);

const onButtonClick = (direction: string) => {
    const offset = direction === "next" ? 1 : -1;
    const newIndex = activeSlide.value + offset;

    if (newIndex < 0) {
        activeSlide.value = props.slideList.length - 1;
        return;
    }
    if (newIndex >= props.slideList.length) {
        activeSlide.value = 0;
        return;
    }

    activeSlide.value += offset;
};
</script>

<style scoped lang="scss"></style>
