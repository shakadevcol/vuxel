import { describe, test, expect, beforeEach } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import Carousel from "./Carousel.vue";

const slideList = [
    {
        src: "https://source.unsplash.com/78A265wPiO4",
        alt: "Nature Image #1",
    },
    {
        src: "https://source.unsplash.com/eOpewngf68w",
        alt: "Nature Image #2",
    },
    {
        src: "https://source.unsplash.com/ndN00KmbJ1c",
        alt: "Nature Image #3",
    },
];
const arrow = "arrow.png";

let wrapper: VueWrapper;

describe("Carousel", () => {
    beforeEach(() => {
        wrapper = mount(Carousel, {
            props: {
                slideList,
                arrow,
            },
        });
    });

    test("can be rendered", () => {
        //console.log(wrapper.html());
        expect(wrapper.findAll('[data-test="slide"]')).toHaveLength(3);

        expect(
            wrapper.find('[data-test="prev-btn"] img').attributes("src")
        ).toBe(arrow);
        expect(
            wrapper.find('[data-test="next-btn"] img').attributes("src")
        ).toBe(arrow);
    });

    test("click on next btn when is first slide", async () => {
        await wrapper.find('[data-test="next-btn"]').trigger("click");
        expect(
            wrapper.find(".carousel__slide--active img").attributes("src")
        ).toBe(slideList[1].src);
    });

    test("click on next btn when is last slide", async () => {
        await wrapper.find('[data-test="next-btn"]').trigger("click");
        await wrapper.find('[data-test="next-btn"]').trigger("click");
        await wrapper.find('[data-test="next-btn"]').trigger("click");
        expect(
            wrapper.find(".carousel__slide--active img").attributes("src")
        ).toBe(slideList[0].src);
    });

    test("can click on prev btn when is first slide", async () => {
        await wrapper.find('[data-test="prev-btn"]').trigger("click");
        expect(
            wrapper.find(".carousel__slide--active img").attributes("src")
        ).toBe(slideList[2].src);
    });
});
