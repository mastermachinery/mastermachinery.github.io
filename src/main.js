import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/darkly/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  const redirect = sessionStorage.redirect;
  console.log("Welcome to main.js v1.2");

  if (redirect) {
    console.log(`Redirecting to ${redirect} ...`);
    sessionStorage.removeItem("redirect");
    router.push(redirect);
  }

  app.mount("#app");
});
