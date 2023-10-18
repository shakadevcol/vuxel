import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Progress from "./Progress.vue";

describe("Progress", () => {
    test("renders a default progress component when no props are passed", () => {
        const wrapper = mount(Progress);

        expect(wrapper.element.classList.contains("progress--primary")).toBe(
            true
        );
        expect(wrapper.text()).toBe(`${0}%`);
    });

    test("can be rendered when props are passed", () => {
        const type = "success";
        const percentage = 20;
        const wrapper = mount(Progress, {
            props: {
                type,
                percentage,
            },
        });

        expect(wrapper.element.classList.contains(`progress--${type}`)).toBe(
            true
        );
        expect(wrapper.text()).toBe(`${percentage}%`);
    });

    test("displays 0% when passing a percentage less than 0", () => {
        const percentage = -1;
        const wrapper = mount(Progress, {
            props: {
                percentage,
            },
        });

        expect(wrapper.text()).toBe("0%");
    });

    test("displays 100% when passing a percentage greater than 100", () => {
        const percentage = 101;
        const wrapper = mount(Progress, {
            props: {
                percentage,
            },
        });

        expect(wrapper.text()).toBe("100%");
    });
});
