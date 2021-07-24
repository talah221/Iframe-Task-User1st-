import { createApp} from "vue";
import App from "./RootComponent.vue";
import store from "./store";
import router from "./router/index";



const app = createApp(App)
  .use(router)
  .use(store)


app.mount("#app");
