<template>
    <div>
        <section class="content-section" id="button">
            <a href="#button"><h1 class="heading heading--h1">Button</h1></a>
            <p>The button component comes in eight variations.</p>
        </section>

        <section class="content-section" id="examples">
            <a href="#examples"
                ><h1 class="heading heading--h1">Examples</h1></a
            >

            <section class="content-section" id="types">
                <a href="#types"><h3 class="heading heading--h3">Types</h3></a>
                <p>
                    Use <code class="code-snippet">btn-type</code> to define
                    Button's style.
                </p>

                <TheCoding>
                    <template v-slot:example>
                        <vx-button btn-type="primary">Primary</vx-button>
                        <vx-button btn-type="secondary">Secondary</vx-button>
                        <vx-button btn-type="success">Success</vx-button>
                        <vx-button btn-type="danger">Danger</vx-button>
                        <vx-button btn-type="warning">Warning</vx-button>
                        <vx-button btn-type="info">Info</vx-button>
                        <vx-button btn-type="light">Light</vx-button>
                        <vx-button btn-type="dark">Dark</vx-button>
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ typesExample }}</code></pre>
                    </template>
                </TheCoding>
            </section>
            <section class="content-section" id="disabled-button">
                <a href="#disabled-button"
                    ><h3 class="heading heading--h3">Disabled button</h3></a
                >
                <p>
                    Use the <code class="code-snippet">disabled</code> attribute
                    to determine if the button is disabled.
                </p>

                <TheCoding>
                    <template v-slot:example>
                        <vx-button btn-type="primary" disabled
                            >Primary</vx-button
                        >
                        <vx-button btn-type="secondary" disabled
                            >Secondary</vx-button
                        >
                        <vx-button btn-type="success" disabled
                            >Success</vx-button
                        >
                        <vx-button btn-type="danger" disabled>Danger</vx-button>
                        <vx-button btn-type="warning" disabled
                            >Warning</vx-button
                        >
                        <vx-button btn-type="info" disabled>Info</vx-button>
                        <vx-button btn-type="light" disabled>Light</vx-button>
                        <vx-button btn-type="dark" disabled>Dark</vx-button>
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ disabledButtonsExample }}</code></pre>
                    </template>
                </TheCoding>
            </section>
            <section class="content-section" id="tags">
                <a href="#tags"><h3 class="heading heading--h3">Tags</h3></a>
                <p>
                    The button component supports tags like: button, a, input
                    and router-link.
                </p>
                <TheCoding>
                    <template v-slot:example>
                        <vx-button btn-type="primary">Button</vx-button>
                        <vx-button
                            tag="a"
                            href="https://vuejs.org/"
                            target="blank"
                            btn-type="primary"
                            >Anchor</vx-button
                        >
                        <vx-button
                            tag="input"
                            btn-type="primary"
                            type="submit"
                            value="Submit input"
                        ></vx-button>

                        <vx-button
                            tag="router-link"
                            :to="{ name: 'about' }"
                            btn-type="primary"
                            >Router link to named route</vx-button
                        >

                        <vx-button
                            tag="router-link"
                            to="/documentation/about"
                            btn-type="primary"
                            >Router link to path link</vx-button
                        >
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ tagsExample }}</code></pre>
                    </template>
                </TheCoding>
            </section>
            <section class="content-section" id="events">
                <a href="#events"
                    ><h3 class="heading heading--h3">Events</h3></a
                >
                <TheCoding>
                    <template v-slot:example>
                        <vx-button @click="onClick" btn-type="primary"
                            >Click on me</vx-button
                        >
                    </template>
                    <template v-slot:code>
                        <pre><code class="language-javascript" >{{ eventsExample }}</code></pre>
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
<vx-button btn-type="primary">Primary</vx-button>
<vx-button btn-type="secondary">Secondary</vx-button>
<vx-button btn-type="success">Success</vx-button>
<vx-button btn-type="danger">Danger</vx-button>
<vx-button btn-type="warning">Warning</vx-button>
<vx-button btn-type="info">Info</vx-button>
<vx-button btn-type="light">Light</vx-button>
<vx-button btn-type="dark">Dark</vx-button>
            `;

const disabledButtonsExample = `
<vx-button btn-type="primary" disabled>Primary</vx-button>
<vx-button btn-type="secondary" disabled>Secondary</vx-button>
<vx-button btn-type="success" disabled>Success</vx-button>
<vx-button btn-type="danger" disabled>Danger</vx-button>
<vx-button btn-type="warning" disabled>Warning</vx-button>
<vx-button btn-type="info" disabled>Info</vx-button>
<vx-button btn-type="light" disabled>Light</vx-button>
<vx-button btn-type="dark" disabled>Dark</vx-button>
`;

const tagsExample = `
<vx-button btn-type="primary">Button</vx-button>

<vx-button
    tag="a"
    href="https://vuejs.org/"
    target="blank"
    btn-type="primary"
    >Anchor</vx-button
>

<vx-button
    tag="input"
    btn-type="primary"
    type="submit"
    value="Submit input"
></vx-button>

<vx-button
    tag="router-link"
    :to="{ name: 'about' }"
    btn-type="primary"
    >Router link to named route</vx-button
>

<vx-button tag="router-link" to="/documentation/about" btn-type="primary"
    >Router link to path link</vx-button
>
            `;

const eventsExample = `<template>
    <div>
        <vx-button @click="onClick" btn-type="primary">Click on me</vx-button>
    </div>
</template>
<script setup>
    const onClick = () => {
        alert("click event");
    };
}
<\/script>
            `;
const onClick = () => {
    alert("click event");
};
</script>

<style scoped></style>
