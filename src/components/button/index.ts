import { App } from "vue";
import Button from "./Button.vue";

function install(app: App) {
    // Register globally the component
    app.component(Button.name, Button);
}
// Exports the component like a plugin
export default { install };
