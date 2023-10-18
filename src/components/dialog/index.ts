import { App } from "vue";

import Dialog from "./Dialog.vue";

function install(app: App) {
    // Register globally the component
    app.component(Dialog.name, Dialog);
}

// Exports the component like a plugin
export default { install };
