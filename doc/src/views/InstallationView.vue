<template>
    <div>
        <section class="content-section" id="installation">
            <a href="#installation"
                ><h1 class="heading heading--h1">Installation and usage</h1></a
            >

            <a href="#installation"
                ><h2 class="heading heading--h2">Installation with NPM</h2></a
            >

            <div>
                <pre><code class="language-javascript" >{{ vuxelInstallation }}</code></pre>
            </div>

            <!-- <p>
                Several components use animate.css, you might want add this
                package.
            </p>

            <div>
                <pre><code class="language-html" >{{animateCssCdn}}</code></pre>
            </div> -->
            <a href="#usage-with-npm"
                ><h2 class="heading heading--h2">Usage</h2></a
            >
            <h4>Full bundle</h4>
            <div>
                <pre
                    class="line-numbers"
                ><code class="language-javascript">{{ vuxelUsageFullBundleNpm }}</code></pre>
            </div>
            <h4>Individual components as vue plugins</h4>
            <div>
                <pre><code class="language-javascript">{{ vuxelUsageIndividualNpm }}</code></pre>
            </div>
        </section>
        <!-- <section id="standAlone">
            <h1 class="heading heading--h1"><a href="#standAlone">Standalone</a></h1>
            <p>
                Several components use animate.css, you might want add this
                package.
            </p>

            <div>
                <pre><code class="language-html">{{ animateCssCdn }}</code></pre>
            </div>
        </section> -->

        <!-- <div class="container">
            <Sidebar />
            <div class="content">
                <section id="installation">
                    <h1 class="heading heading--h1"><a href="#installation">Installation with NPM</a></h1>

                    <div>
                        <pre><code class="language-javascript" >{{ vuxelUsageFullBundleNpm }}</code></pre>
                    </div>

                    <p>
                        Several components use animate.css, you might want add
                        this package.
                    </p>

                    <div>
                        <pre><code class="language-html" >{{animateCssCdn}}</code></pre>
                    </div>
                    <h2 class="heading heading--h2"><a href="#usage-with-npm">Usage</a></h2>
                    <h4>Full bundle</h4>
                    <div>
                        <pre
                            class="line-numbers"
                        ><code class="language-javascript">{{ vuxelUsageFullBundleNpm }}</code></pre>
                    </div>
                    <h4>Individual components as vue plugins</h4>
                    <div>
                        <pre><code class="language-javascript">{{ vuxelUsageIndividualNpm }}</code></pre>
                    </div>
                </section>
                <section id="standAlone">
                    <h1 class="heading heading--h1"><a href="#standAlone">Standalone</a></h1>
                    <p>
                        Several components use animate.css, you might want add
                        this package.
                    </p>

                    <div>
                        <pre><code class="language-html">{{ animateCssCdn }}</code></pre>
                    </div>
                </section>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import usePrism from "../composables/prism";

usePrism();

const vuxelInstallation = `npm install vuxel`;
const vuxelUsageFullBundleNpm = `import vuxel from "vuxel";
import "vuxel/style.css";

Vue.use(vuxel);
`;

const animateCssCdn = `<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />`;

const vuxelUsageIndividualNpm = `import Vue from "vue";
import { Button, Notification, Dialog } from "vuxel";
import "vuxel/style.css";

Vue.use(Button);
Vue.use(Notification);
Vue.use(Dialog);
`;
</script>

<style scoped></style>
