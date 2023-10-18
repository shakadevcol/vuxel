import { App } from "vue";
import Alert from "./Alert.vue";

function install(app: App) {
    // Register globally the component
    app.component(Alert.name, Alert);
}
// Exports the component like a plugin
export default { install };
