import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import BalmUI from "balm-ui";
import "balm-ui-css";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
  },
});

app.use(VueQueryPlugin);
app.use(router);
app.use(BalmUI);

app.mount("#app");
