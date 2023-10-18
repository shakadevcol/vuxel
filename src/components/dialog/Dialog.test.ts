import { describe, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import Dialog from "./Dialog.vue";

describe("Dialog", () => {
    test("cannot be rendered if modelValue is false", () => {
        const wrapper = mount(Dialog, {
            props: {
                title: "tit 1",
                message: "mes 1",
                modelValue: false,
            },
        });

        expect(wrapper.text()).toBe("");
    });

    test("can be rendered if modelValue is true and the other properties are not empty", () => {
        const title = "My title";
        const message = "My message";
        const wrapper = mount(Dialog, {
            props: {
                title,
                message,
                modelValue: true,
            },
        });

        expect(wrapper.find('[data-test="title"]').text()).toBe(title);
        expect(wrapper.find('[data-test="message"]').text()).toBe(message);
    });

    test("can be be closed", async () => {
        // Documentation: https://test-utils.vuejs.org/guide/advanced/v-model.html#testing-v-model

        const title = "My title";
        const message = "My message";
        const wrapper: VueWrapper = mount(Dialog, {
            props: {
                title,
                message,
                modelValue: true,
                "onUpdate:modelValue": (e) =>
                    wrapper.setProps({ modelValue: e }),
            },
        });

        expect(wrapper.props("modelValue")).toBe(true);
        await wrapper.find('[data-test="close-button"]').trigger("click");

        expect(wrapper.props("modelValue")).toBe(false);
        expect(wrapper.text()).toBe("");
    });
});
