<template>
  <div class="detail">
    <div class="goback" @click="goback">goback</div>
  </div>
</template>

<script>
export default {
  name: "detail",
  methods: {
    goback() {
      console.log(this.$router);
      this.$router.back();
    },
  },
};
</script>

<style></style>
