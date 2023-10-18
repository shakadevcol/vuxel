<template>
    <div>
        <section class="content-section" id="button">
            <a href="#button"><h1 class="heading heading--h1">Progress</h1></a>
            <p>
                The progress component provides information about the status of
                an operation. Comes in eight variations.
            </p>
        </section>

        <section class="content-section" id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <section class="content-section" id="types">
                <a href="#types"><h3 class="heading heading--h3">Types</h3></a>
                <p>
                    Use <code class="code-snippet">type</code> to define the
                    style of the progress component.
                </p>

                <TheCoding>
                    <template v-slot:example>
                        <!-- <vx-button btn-type="primary" @click="increment()"
                            >+</vx-button
                        >
                        <vx-button btn-type="primary">-</vx-button> -->
                        <vx-progress
                            type="primary"
                            :percentage="10"
                        ></vx-progress>
                        <vx-progress
                            type="secondary"
                            :percentage="20"
                        ></vx-progress>
                        <vx-progress
                            type="success"
                            :percentage="30"
                        ></vx-progress>
                        <vx-progress
                            type="danger"
                            :percentage="40"
                        ></vx-progress>
                        <vx-progress
                            type="warning"
                            :percentage="50"
                        ></vx-progress>
                        <vx-progress type="info" :percentage="60"></vx-progress>
                        <vx-progress
                            type="light"
                            :percentage="80"
                        ></vx-progress>
                        <vx-progress type="dark" :percentage="90"></vx-progress>
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ typesExample }}</code></pre>
                    </template>
                </TheCoding>
            </section>
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
                        <td><code>primary</code></td>
                        <td>
                            Style of the progress component (primary, secondary,
                            success, danger, warning, info, light, dark)
                        </td>
                    </tr>
                    <tr>
                        <td><code>percentage</code></td>
                        <td>Number</td>
                        <td>0</td>
                        <td>Percentage progress.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup lang="ts">
import { stat } from "fs";
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";
import { ref } from "vue";

usePrism();

const status = ref(0);
const increment = () => {
    status.value += 10;
};
const decrement = () => {
    status.value -= 10;
};
const typesExample = `
<vx-progress type="primary" :percentage="10"></vx-progress>
<vx-progress type="secondary" :percentage="20"></vx-progress>
<vx-progress type="success" :percentage="30"></vx-progress>
<vx-progress type="danger" :percentage="40"></vx-progress>
<vx-progress type="warning" :percentage="50"></vx-progress>
<vx-progress type="info" :percentage="60"></vx-progress>
<vx-progress type="light" :percentage="80"></vx-progress>
<vx-progress type="dark" :percentage="90"></vx-progress>
            `;
</script>

<style scoped></style>
