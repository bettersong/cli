export default [
  // pc端首页
  { path: "/", component: () => import("./pages/index") },
  // 移动端首页
  { path: "/m_index", component: () => import("./pages/m_index") },
  { path: "/login", component: () => import("./pages/login") },
  { path: "/detail", component: () => import("./pages/detail") },
  { path: "*", redirect: "/" },
];
