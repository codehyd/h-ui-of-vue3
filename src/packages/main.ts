import type { App } from "vue";
import "./fonts/iconfont.css";
import HButton from "../components/h-button";
const components = [HButton];

// æé
export { HButton };

// ćšć±
const hUI = {
  install: (app: App) => {
    components.forEach((component) => app.component(component.name, component));
  },
};

export default hUI;
