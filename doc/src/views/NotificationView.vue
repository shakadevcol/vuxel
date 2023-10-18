<template>
    <div>
        <section id="notification">
            <a href="#notification"
                ><h1 class="heading heading--h1">Notification</h1></a
            >
            <p>
                The notification component is used to show important
                notification message to the user through the use of contextual
                types, icons, and colors. These default types come in eight
                variations.
            </p>
        </section>

        <section id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <TheCoding>
                <template v-slot:example>
                    <vx-button
                        btn-type="primary"
                        @click="onShowPermanentNotification"
                        >Permanent notification</vx-button
                    >
                    <vx-button
                        btn-type="primary"
                        @click="onShowTimeoutNotification"
                        >Timeout notification</vx-button
                    >
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
import { inject } from "vue";
import TheCoding from "../components/documentation/TheCoding.vue";
import usePrism from "../composables/prism";

usePrism();

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
</script>

<style scoped></style>
