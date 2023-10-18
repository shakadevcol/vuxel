<template>
    <div>
        <section id="notification">
            <a href="#notification"
                ><h1 class="heading heading--h1">Multi Image Slide</h1></a
            >
            <p>
                The multi image slide component is used to show series of
                images.
            </p>
        </section>

        <section id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <TheCoding>
                <template v-slot:example>
                    <vx-multi-image-slide :arrow="arrow" :images="images" />
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
                        <td><code>arrow</code></td>
                        <td>String</td>
                        <td><code>arrow.png</code></td>
                        <td>Path to the arrow icon.</td>
                    </tr>
                    <tr>
                        <td><code>images</code></td>
                        <td>Array of strings</td>
                        <td>[ "card1.jpg", "card2.jpg", ...]</td>
                        <td>Array of images.</td>
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
];
const arrow = "/slides/multi-image/arrow.png";

const example = `
<template>
    <div>
        <vx-multi-image-slide :arrow="arrow" :images="images" />
    </div>
</template>

<script setup>
const images = [
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
];
const arrow = "/slides/multi-image/arrow.png";
<\/script>
           `;
</script>

<style scoped></style>
