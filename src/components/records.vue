<template>
  <div class="records">
    <div class="tabs">
      <el-button size="small" type="primary" round>添加</el-button>
      <!-- <el-button type="success" round>成功按钮</el-button> -->
    </div>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
        @click="toDoAction"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "records",
  data() {
    return {
      activities: [
        {
          content: "上班签到",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "中午吃饭",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "晚上吃饭",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "下班签到",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
  methods: {
    toDoAction() {
      console.log(111);
    },
  },
};
</script>

<style lang="less">
.records {
  width: 28%;
  min-width: 300px;
  //   height: 94%;
  //   padding: 30px 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
}
.tabs {
  display: flex;
  align-items: center;
  padding: 20px 30px 30px;
}
</style>
