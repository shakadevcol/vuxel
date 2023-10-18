<template>
    <div class="product">
        <button class="pre-btn" @click="moveSlide('prev')">
            <img :src="arrow" alt="" />
        </button>
        <button class="nxt-btn" @click="moveSlide('next')">
            <img :src="arrow" alt="" />
        </button>
        <div class="product-container" ref="productContainers">
            <slot>
                <div
                    v-for="(image, index) in demoImages"
                    :key="index"
                    class="product-card"
                >
                    <div class="product-image">
                        <span class="discount-tag"
                            >{{ image.discount }} off</span
                        >
                        <img :src="image.image" class="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div class="product-info">
                        <h2 class="product-brand">{{ image.name }}</h2>
                        <p class="product-short-description">
                            {{ image.description }}
                        </p>
                        <span class="price">{{ image.price }}</span
                        ><span class="actual-price">{{
                            image.actualPrice
                        }}</span>
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
    images: [];
    arrow: string;
}

defineProps<Props>();

const demoImages = [
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card1.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card2.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card3.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card4.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card5.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card6.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card7.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card8.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card9.jpg",
    },
    {
        name: "brand 1",
        description: "A Short Line About The Cloth..",
        price: "$20",
        actualPrice: "$40",
        discount: "50%",
        image: "/slides/multi-image/card10.jpg",
    },
];
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
.product {
    position: relative;
    overflow: hidden;
    padding: 20px;
}
.product-container {
    padding: 0 1vw;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    /* border: 1px solid red; */
}
.product-container::-webkit-scrollbar {
    display: none;
}

.product-card {
    flex: 0 0 auto;
    width: 250px;
    /* height: 490px; */
    height: auto;
    margin-right: 40px;

    &:last-child {
        margin-right: 0;
    }
}

.product-image {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}

.product-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.discount-tag {
    position: absolute;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    color: #ff7d7d;
    right: 10px;
    top: 10px;
    text-transform: capitalize;
}

.card-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 90%;
    text-transform: capitalize;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    opacity: 0;
}

.product-card:hover .card-btn {
    opacity: 1;
}

.card-btn:hover {
    background: #ff7d7d;
    color: #fff;
}

.product-info {
    width: 100%;
    /* height: 100px; */
    padding-top: 10px;
}

.product-brand {
    text-transform: uppercase;
}

.product-short-description {
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    opacity: 0.5;
    text-transform: capitalize;
    margin: 5px 0;
}

.price {
    font-weight: 900;
    font-size: 20px;
}

.actual-price {
    margin-left: 20px;
    opacity: 0.5;
    text-decoration: line-through;
}

.pre-btn,
.nxt-btn {
    border: none;
    width: 10vw;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
    cursor: pointer;
    z-index: 8;
}

.pre-btn {
    left: 0;
    transform: rotate(180deg);
}

.nxt-btn {
    right: 0;
}

.pre-btn img,
.nxt-btn img {
    opacity: 0.2;
}

.pre-btn:hover img,
.nxt-btn:hover img {
    opacity: 1;
}
</style>
