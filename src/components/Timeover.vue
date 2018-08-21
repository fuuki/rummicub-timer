<template>
  <div class="timeover">
    <div id="timeover-text">
      TIMEOVER
    </div>
    <div
      class="back-button"
      @click="$emit('top')"
    >
      <div class="button-text">
        Back to TOP
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeover',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeover {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
}
#timeover-text {
  font-size: 10vw;
}
.back-button {
  width: 50%;
  height: 20%;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}
.button-text {
  font-size: 5vw;
}
</style>
