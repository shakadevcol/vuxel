import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "./Alert.vue";

describe("Alert", () => {
    test("can be rendered", () => {
        const type = "success";
        const slotContent = "hello";
        const wrapper = mount(Alert, {
            props: {
                type,
            },
            slots: {
                default: slotContent,
            },
        });

        expect(wrapper.element.classList.contains(`alert--${type}`)).toBe(true);
        expect(wrapper.text()).toBe(slotContent);
    });

    test("can be closed", async () => {
        const type = "success";
        const slotContent = "hello";
        const wrapper = mount(Alert, {
            props: {
                type,
            },
            slots: {
                default: slotContent,
            },
        });

        await wrapper.find('[data-test="close-btn"]').trigger("click");
        expect(wrapper.isVisible()).toBe(false);
    });
});
