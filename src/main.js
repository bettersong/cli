import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import {
  Calendar,
  Button,
  Timeline,
  TimelineItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "element-ui";
Vue.config.productionTip = false;
// const router = new Router({routes})
const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.use(Calendar);
Vue.use(Button);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
// Vue.use(MessageBox);
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
