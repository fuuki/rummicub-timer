<template>
  <div class="timer">
    <span
      id="time-text"
      @click="reset()"
    >
      {{ remainingTimeSec }}
    </span>
  </div>
</template>

<script>
const timeLimitSec = 60;

export default {
  name: 'Timer',
  data() {
    return {
      remainingTimeSec: 0,
      timerInterval: null,
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    reset() {
      this.remainingTimeSec = timeLimitSec;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.count();
      }, 1000);
      this.timerOn = true;
    },
    count() {
      this.remainingTimeSec -= 1;
      if (this.remainingTimeSec < 0) {
        this.$emit('timeover');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#time-text {
  font-size: 40vw;
}
</style>
