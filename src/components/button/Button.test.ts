import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
    test("renders the slot content", () => {
        const slotContent = "hello";
        const wrapper = mount(Button, {
            slots: {
                default: slotContent,
            },
        });

        expect(wrapper.text()).toBe(slotContent);
    });

    test("handle a click event", async () => {
        const wrapper = mount(Button);
        await wrapper.find(".btn").trigger("click");

        // console.log(wrapper.emitted());
        expect(wrapper.emitted()).toBeDefined();
    });

    test("renders a default button tag when the tag property is empty", () => {
        const wrapper = mount(Button);
        expect(wrapper.element.nodeName).toBe("BUTTON");
    });

    test("renders the tag property", () => {
        const wrapper = mount(Button, {
            props: {
                tag: "a",
            },
        });
        expect(wrapper.element.nodeName).toBe("A");
    });

    test("renders the btnType property", () => {
        const btnType = "success";
        const wrapper = mount(Button, {
            props: {
                btnType,
            },
        });

        expect(wrapper.element.classList.contains(`btn--${btnType}`)).toBe(
            true
        );
    });
});
