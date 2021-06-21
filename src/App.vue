<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    if (this.isMobile()) {
      this.$router.push("/m_index");
    }
    window.addEventListener("resize", () => {
      if (this.isMobile()) {
        this.$router.push("/m_index");
      } else {
        this.$router.push("/");
      }
    });
  },
  methods: {
    isMobile() {
      // const flag = navigator.userAgent.match(
      //   /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      // );
      // return flag;
      // console.log(window.matchMedia("(min-width: 375px)").matches);
      // return window.matchMedia("(min-width: 375px)").matches;
      const innerWidth = window.innerWidth;
      console.log("[innerWidth]", innerWidth);
      // const dpr = window.devicePixelRatio;
      if (innerWidth < 600) {
        return true;
      }
    },
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
}
</style>
