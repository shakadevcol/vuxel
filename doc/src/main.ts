import { createApp } from "vue";
//import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import VxLibrary from "../../src/index"; //Import all components
//import { Button, Dialog } from "./index"; // Import individually
//import "./assets/scss/vuxel/app.scss"; // Not necessary

//createApp(App).mount("#app");
const app = createApp(App);

// Use all components
app.use(VxLibrary);

// Use Individually
/* app.use(Button);
app.use(Dialog); */

app.use(router);
app.mount("#app");
