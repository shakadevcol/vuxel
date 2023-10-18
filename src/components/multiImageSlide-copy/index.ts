import { App } from "vue";
import MultiImageSlide from "./MultiImageSlide.vue";

function install(app: App) {
    // Register globally the component
    app.component(MultiImageSlide.name, MultiImageSlide);
}
// Exports the component like a plugin
export default { install };
