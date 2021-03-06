import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/build.css";
import "./assets/css/custom.css";
import router from "./router/routes";
const app = createApp(App);
app.use(router);
app.mount("#app");
