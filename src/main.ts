import { createApp } from "vue";
import App from "./App.vue";

import "./assets/fonts/iconfont.css";
import HButton from "./components/h-button";

const components = [HButton];

const app = createApp(App);
for (const component of components) {
  app.component(component.name, component);
}
app.mount("#app");
