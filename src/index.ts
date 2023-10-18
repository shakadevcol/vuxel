import { App } from "vue";
import * as components from "./components";

const Plugin = {
    install(app: App) {
        for (const key in components) {
            //console.log("Key: ", key);
            //console.log("components[key]: ", components[key]);

            // Install each plugin individually
            // @ts-expect-error
            app.use(components[key]);
        }
    },
};

import "./assets/scss/vuxel/app.scss";

export default Plugin;

// Exports all components as vue plugin, to be use individually like a plugin.
export * from "./components";
//export * from "./constants";
//export * from "./utils";
