export default [
  { path: "/", component: () => import("./pages/index") },
  { path: "/login", component: () => import("./pages/login") },
  { path: "*", redirect: "/" },
];
