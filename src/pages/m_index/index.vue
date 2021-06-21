<template>
  <div class="m_index">
    <div class="btn" @click="go">gogogog</div>
  </div>
</template>

<script>
export default {
  name: "m_index",
  methods: {
    go() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style lang="less">
.btn {
  margin-top: 100px;
  height: 50px;
  background: brown;
  color: #ffffff;
}
</style>
