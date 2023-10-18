<template>
    <div>
        <div class="carousel" data-carousel>
            <button
                class="carousel-button prev"
                @click="onButtonClick('prev')"
                data-carousel-button="prev"
            >
                &#8656;
            </button>
            <button
                class="carousel-button next"
                @click="onButtonClick('next')"
                data-carousel-button="next"
            >
                &#8658;
            </button>
            <ul ref="slides" data-slides>
                <li class="slide" data-active>
                    <img
                        src="https://source.unsplash.com/78A265wPiO4"
                        alt="Nature Image #1"
                    />
                </li>
                <li class="slide">
                    <img
                        src="https://source.unsplash.com/eOpewngf68w"
                        alt="Nature Image #2"
                    />
                </li>
                <li class="slide">
                    <img
                        src="https://source.unsplash.com/ndN00KmbJ1c"
                        alt="Nature Image #3"
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

const slides = ref<HTMLUListElement | null>(null);

const onButtonClick = (direction: string) => {
    console.log("dir: ", direction);
    const offset = direction === "next" ? 1 : -1;

    if (slides) {
        const activeSlide: HTMLLIElement = slides.value?.querySelector(
            "[data-active]"
        ) as HTMLLIElement;

        console.log("slides: ", slides.value);
        console.log("activeSlide: ", activeSlide);

        let newIndex: number =
            [...(slides.value?.children || [])].indexOf(activeSlide) + offset;

        console.log("newIndex ", newIndex);
        if (newIndex < 0) newIndex = slides.value?.children.length! - 1;
        if (newIndex >= slides.value?.children.length!) newIndex = 0;

        if (slides.value) {
            let currentSlide = slides.value.children[newIndex] as HTMLLIElement;
            currentSlide.dataset.active = "true";
        }

        delete activeSlide.dataset.active;
    }
};
</script>

<style scoped>
.carousel {
    /* width: 100vw; */
    width: 100%;
    height: 100vh;
    position: relative;
}

.carousel > ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 200ms opacity ease-in-out;
    transition-delay: 200ms;
}

.slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.slide[data-active] {
    opacity: 1;
    z-index: 1;
    transition-delay: 0ms;
}

.carousel-button {
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    font-size: 4rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    background-color: rgba(0, 0, 0, 0.1);
}

.carousel-button:hover,
.carousel-button:focus {
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
}

.carousel-button:focus {
    outline: 1px solid black;
}

.carousel-button.prev {
    left: 1rem;
}

.carousel-button.next {
    right: 1rem;
}
</style>
