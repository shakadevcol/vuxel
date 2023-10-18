<template>
    <div class="coding-documentation">
        <div class="coding-documentation__header">
            <ul class="coding-documentation__list">
                <li class="coding-documentation__list-item" v-if="github">
                    <a :href="github" class="coding-documentation__list-link">
                        <img
                            src="/images/github.svg"
                            class="coding-documentation__list-img"
                            alt=""
                        />
                        Github
                    </a>
                </li>
                <li class="coding-documentation__list-item" @click="showCode">
                    <img
                        src="/images/code-snippet.svg"
                        class="coding-documentation__list-img"
                        alt=""
                    />
                    Code
                </li>
            </ul>
        </div>
        <div class="coding-documentation__example" ref="documentationExample">
            <slot name="example"></slot>

            <div class="coding-documentation__code" ref="codePane">
                <slot name="code"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
    github: {
        type: String,
        //default: "",
    },
});

const documentationExample = ref<HTMLElement | null>(null);
const codePane = ref<HTMLElement | null>(null);

const showCode = () => {
    if (documentationExample.value && codePane.value) {
        const codePaneheight = codePane.value.scrollHeight;

        if (
            codePane.value.style.height == "0px" ||
            codePane.value.style.height == ""
        ) {
            codePane.value.style.height = codePaneheight + "px";
            documentationExample.value.style.paddingBottom = "0px";
        } else {
            codePane.value.style.height = "0px";
            documentationExample.value.style.paddingBottom = "1.25rem";
        }

        codePane.value.style.height = String(codePaneheight);
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/documentation/components/coding-documentation";
</style>
