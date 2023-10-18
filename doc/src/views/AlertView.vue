<template>
    <div>
        <section class="content-section" id="button">
            <a href="#button"><h1 class="heading heading--h1">Alert</h1></a>
            <p>
                The alert component provides feedback messages for user actions
                and comes in eight variations.
            </p>
        </section>

        <section class="content-section" id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <section class="content-section" id="types">
                <a href="#types"><h3 class="heading heading--h3">Types</h3></a>
                <p>
                    Use <code class="code-snippet">type</code> to define Alert's
                    style.
                </p>

                <TheCoding>
                    <template v-slot:example>
                        <vx-alert type="primary"
                            >This is a primary alert message</vx-alert
                        >
                        <vx-alert type="secondary"
                            >This is a secondary alert message</vx-alert
                        >
                        <vx-alert type="success"
                            >This is a success alert message</vx-alert
                        >
                        <vx-alert type="danger"
                            >This is a danger alert message</vx-alert
                        >
                        <vx-alert type="warning"
                            >This is a warning alert message</vx-alert
                        >
                        <vx-alert type="info"
                            >This is a info alert message</vx-alert
                        >
                        <vx-alert type="light"
                            >This is a light alert message</vx-alert
                        >
                        <vx-alert type="dark"
                            >This is a dark alert message</vx-alert
                        >
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ typesExample }}</code></pre>
                    </template>
                </TheCoding>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";

usePrism();

const typesExample = `
<vx-alert type="primary">This is a primary alert message</vx-alert>
<vx-alert type="secondary">This is a secondary alert message</vx-alert>
<vx-alert type="success">This is a success alert message</vx-alert>
<vx-alert type="danger">This is a danger alert message</vx-alert>
<vx-alert type="warning">This is a warning alert message</vx-alert>
<vx-alert type="info">This is a info alert message</vx-alert>
<vx-alert type="light">This is a light alert message</vx-alert>
<vx-alert type="dark">This is a dark alert message</vx-alert>
            `;
</script>

<style scoped></style>
