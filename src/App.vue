<template>
  <div id="app">
    <StartPage v-if="display=='startPage'" @start="start"/>
    <Timer v-if="display=='timer'" @timeover="timeover"/>
    <Timeover v-if="display=='timeover'" @top="top"/>
  </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import StartPage from "./components/StartPage.vue";
import Timeover from "./components/Timeover.vue";

export default {
  name: "app",
  components: {
    Timer,
    StartPage,
    Timeover
  },
  data() {
    return {
      display: "startPage"
    };
  },
  methods: {
    start() {
      this.display = "timer";
    },
    timeover() {
      this.display = "timeover";
    },
    top() {
      this.display = "startPage";
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

.app {
  height: 100vh;
}
</style>
