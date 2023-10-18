import { App } from "vue";
import { mount } from "mount-vue-component";

import Notification from "./Notification.vue";

const NotificationProgramatic = {
    open(params: Object) {
        /* const vm =
                typeof window !== "undefined" && window.Vue
                    ? window.Vue
                    : localVueInstance; */

        // Create DOM element container to mount component instances
        let mountElContainer = document.querySelector(
            ".notifications-container"
        );
        if (!mountElContainer) {
            mountElContainer = document.createElement("div");
            mountElContainer.className = "notifications-container";
            document.body.appendChild(mountElContainer);
        }

        const mountElComponent = document.createElement("div");
        mountElContainer.appendChild(mountElComponent);

        mount(Notification, {
            props: {
                ...params,
                element: mountElComponent,
            },
            element: mountElComponent,
            //app: app,
        });

        // console.log("vNode ", vNode);
        // console.log("el ", el);

        // Creando una instancia del componente no funcionan los lifecycle hooks
        // por ejemplo, el onMounted no se activa
        // Create an instance from the component
        /* const NotificationComponent = createApp(
            { extends: Notification },
            {
                // props
                type: params.type,
                message: params.message,

                // events are passed as props here with on[EventName]
                // onClose() {
                //        mountEl.parentNode.removeChild(mountEl);
                //        NotificationComponent.unmount();
                //        NotificationComponent = null;
                //    },
            }
        );

        // Mount component instance
        NotificationComponent.mount(mountEl); */
    },
};
function install(app: App) {
    // Register globally the component
    // console.log("En este es: ", Notification);
    app.component(Notification.name, Notification);

    // Provides a resource to call this component programatically
    app.provide("VxlNotification", NotificationProgramatic);
}

// Exports the component like a plugin
export default { install };
