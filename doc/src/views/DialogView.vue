<template>
    <div>
        <section id="dialog">
            <a href="#dialog"><h1 class="heading heading--h1">Dialog</h1></a>
            <p>
                The dialog component is used to display important information to
                the user.
            </p>
        </section>

        <section id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <TheCoding>
                <template v-slot:example>
                    <vx-button
                        tag="button"
                        btn-type="success"
                        @click="dialogVisible = !dialogVisible"
                        >Show dialog</vx-button
                    >

                    <vx-dialog
                        title="Dialog title"
                        message="This is a welcome message."
                        v-model="dialogVisible"
                    ></vx-dialog>
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
                        <td><code>title</code></td>
                        <td>String</td>
                        <td><code></code></td>
                        <td>Title for the dialog.</td>
                    </tr>
                    <tr>
                        <td><code>message</code></td>
                        <td>String</td>
                        <td></td>
                        <td>Content message for the dialog.</td>
                    </tr>
                    <tr>
                        <td><code>v-model</code></td>
                        <td>Boolean</td>
                        <td></td>
                        <td>Sets whether to show the dialog.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, getCurrentInstance, h, render } from "vue";
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";

usePrism();

const dialogVisible = ref(false);
const example = `
<template>
    <div>
        <button @click="dialogVisible = !dialogVisible">Show dialog</button>
        <vx-dialog
            title="Dialog title"
            message="This is a welcome message."
            v-model="dialogVisible"
        ></vx-dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
const dialogVisible = ref(false);
<\/script>
           `;
const dialog = inject("VxlNotification");

/* const app = getCurrentInstance().parent;

app.render = function (Component, props, el) {
    if (typeof el === "string") {
        el = document.querySelector(el);
    }

    if (!el) {
        throw new Error("el not found");
    }

    if (props && {}.toString.call(props) !== "[object Object]") {
        throw Error("props must be an object");
    }

    const childTree = h(Component, props);
    childTree.appContext = app._context;

    // Creating a wrapper element here is clunky and ideally wouldn't be necessary
    const div = document.createElement("div");
    el.appendChild(div);

    render(childTree, div);

    return childTree.component.proxy;
};

console.log("parent:");
console.log(app); */

const onShowDialog = () => {
    console.log(dialog);
    dialog.open({
        title: "Dialog title.",
        message: "This is a welcome message.",
        //onClo: pru,
    });
};

/* const onClose = () => {
    console.log("on close parent");
    dialogVisible.value = false;
}; */
</script>

<style scoped></style>
