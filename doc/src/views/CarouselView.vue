<template>
    <div>
        <section class="content-section" id="button">
            <a href="#button"><h1 class="heading heading--h1">Carousel</h1></a>
            <p>
                The carousel component provides a slideshow for cycling images.
            </p>
        </section>

        <section class="content-section" id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <TheCoding>
                <template v-slot:example>
                    <vx-carousel
                        :slide-list="slideList"
                        :arrow="arrow"
                    ></vx-carousel>
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
                        <td><code>slide-list</code></td>
                        <td>Array</td>
                        <td></td>
                        <td>Array of objects with src and alt properties.</td>
                    </tr>
                    <tr>
                        <td><code>arrow</code></td>
                        <td>String</td>
                        <td><code></code></td>
                        <td>Path to the arrow icon.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup lang="ts">
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";
import { ref } from "vue";

usePrism();

const slideList = [
    {
        src: "https://source.unsplash.com/78A265wPiO4",
        alt: "Nature Image #1",
    },
    {
        src: "https://source.unsplash.com/eOpewngf68w",
        alt: "Nature Image #2",
    },
    {
        src: "https://source.unsplash.com/ndN00KmbJ1c",
        alt: "Nature Image #3",
    },
];
const arrow = "/slides/multi-image/arrow.png";

const example = `
<template>
    <div>
        <vx-carousel :slide-list="slideList" :arrow="arrow"></vx-carousel>
    </div>
</template>
<script setup>
    const slideList = [
        {
            src: "https://source.unsplash.com/78A265wPiO4",
            alt: "Nature Image #1",
        },
        {
            src: "https://source.unsplash.com/eOpewngf68w",
            alt: "Nature Image #2",
        },
        {
            src: "https://source.unsplash.com/ndN00KmbJ1c",
            alt: "Nature Image #3",
        },
    ];
    const arrow = "/slides/multi-image/arrow.png";
}
<\/script>

            `;
</script>

<style scoped></style>
