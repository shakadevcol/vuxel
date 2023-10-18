<template>
    <div>
        <section id="notification">
            <a href="#notification"
                ><h1 class="heading heading--h1">Multi Image Slide</h1></a
            >
            <p>The multi image slide component is used to ....</p>
        </section>

        <section id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <TheCoding>
                <template v-slot:example>
                    <vx-multi-image-slide :arrow="arrow">
                        <div
                            v-for="(image, index) in images"
                            :key="index"
                            class="product-card"
                        >
                            <div class="product-image">
                                <!-- <span class="discount-tag">{{ image.discount }} off</span> -->
                                <img
                                    :src="image.image"
                                    class="product-thumb"
                                    alt=""
                                />
                                <!-- <button class="card-btn">add to wishlist</button> -->
                            </div>
                            <!-- <div class="product-info">
                    <h2 class="product-brand">{{ image.name }}</h2>
                    <p class="product-short-description">
                        {{ image.description }}
                    </p>
                    <span class="price">{{ image.price }}</span
                    ><span class="actual-price">{{ image.actualPrice }}</span>
                </div> -->
                        </div>
                    </vx-multi-image-slide>
                </template>
                <template v-slot:code>
                    <pre><code class="language-javascript" >{{ example }}</code></pre>
                </template>
            </TheCoding>
        </section>
        <section id="properties">
            <a href="#properties"
                ><h1 class="heading heading--h1">Properties</h1></a
            >
            <table>
                <thead>
                    <tr>
                        <th>Properties</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>type</code></td>
                        <td>String</td>
                        <td><code>success</code></td>
                        <td>
                            Type of notification (primary, secondary, success,
                            danger, warning, info, light, dark)
                        </td>
                    </tr>
                    <tr>
                        <td><code>message</code></td>
                        <td>String</td>
                        <td></td>
                        <td>Message for the notification.</td>
                    </tr>
                    <tr>
                        <td><code>timeout</code></td>
                        <td>Number</td>
                        <td><code>3000</code></td>
                        <td>
                            Value is in miliseconds. If notification is not
                            permanent you can set the timeout for it.
                        </td>
                    </tr>
                    <tr>
                        <td><code>permanent</code></td>
                        <td>Boolean</td>
                        <td><code>false</code></td>
                        <td>Sets whether the notification is permanent.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup lang="ts">
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";

usePrism();

const images = [
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
const arrow = "/slides/multi-image/arrow.png";

const example = `
<template>
    <div>
        <button @click="onShowPermanentNotification">Permanent notification</button>
        <button @click="onShowTimeoutNotification">Timeout notification</button>
    </div>
</template>

<script setup>
import { inject } from "vue";

const notification = inject("VxlNotification");

const onShowPermanentNotification = () => {
    notification.open({
        type: "secondary",
        message: "This is a permanent notification.",
        permanent: true,
    });
};

const onShowTimeoutNotification = () => {
    notification.open({
        type: "danger",
        message: "This is a timeout notification.",
        permanent: false,
        timeout: 5000,
    });
};
<\/script>
           `;
</script>

<style scoped></style>
