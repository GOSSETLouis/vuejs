import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
createApp(App).use(router).mount("#app");
