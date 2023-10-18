import { App } from "vue";
import Carousel from "./Carousel.vue";

function install(app: App) {
    // Register globally the component
    app.component(Carousel.name, Carousel);
}
// Exports the component like a plugin
export default { install };
