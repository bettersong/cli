<template>
  <div id="app" :class="`bg${currentId}`">
    <header>
      <div class="title">📅日历打卡系统</div>
      <el-dropdown>
        <span
          class="el-dropdown-link"
          style="color: #409eff; font-weight: bold"
        >
          张三<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
          <el-dropdown-item @click.native="changeBg">更换背景</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <div class="centerBox">
      <div class="calendarBox">
        <el-calendar v-model="date">
          <template v-slot:dateCell="{ data }">
            <div slot="reference" class="div-Calendar" @click="checkDate(data)">
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split("-").slice(1).join("-") }}
                {{ data.isSelected ? "✔️" : "" }}
              </p>
            </div>
          </template>
        </el-calendar>
      </div>
      <records />
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    records: () => import("../components/records"),
  },
  data() {
    return {
      date: new Date(),
      currentId: 0,
    };
  },
  methods: {
    changeBg() {
      if (this.currentId < 2) {
        this.currentId += 1;
      } else {
        this.currentId = 0;
      }
    },
    checkDate(data) {
      console.log(data.day);
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
#app {
  min-height: 100%;
  background-size: 100% 100%;
  &.bg0 {
    background-image: url("../assets/bg.png");
  }
  &.bg1 {
    background-image: url("../assets/bg2.png");
  }
  &.bg2 {
    background-image: url("../assets/bg3.png");
  }
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0 60px;
  background: rgba(255, 255, 255, 0.6);
}
.title {
  font-size: 20px;
}
.el-calendar {
  background-color: unset !important;
}
.div-Calendar {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 8px;
}
.el-calendar-day {
  padding: 0 !important;
}
.centerBox {
  width: 94%;
  // height: 70%;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
}
.calendarBox {
  width: 70%;
  // min-width: 800px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
</style>
