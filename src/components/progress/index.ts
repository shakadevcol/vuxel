import { App } from "vue";
import Progress from "./Progress.vue";

function install(app: App) {
    // Register globally the component
    app.component(Progress.name, Progress);
}
// Exports the component like a plugin
export default { install };
