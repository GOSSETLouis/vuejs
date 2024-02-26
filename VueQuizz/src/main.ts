import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import BalmUI from "balm-ui";
import "balm-ui-css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);

app.use(router);
app.use(BalmUI);

app.mount("#app");
