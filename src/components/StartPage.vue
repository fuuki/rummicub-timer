<template>
  <div class="start">
    <div id="title-text">
      Rummicub timer
    </div>
    <div
      class="start-button"
      @click="$emit('start')"
    >
      <div class="button-text">
        START
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
}
#title-text {
  font-size: 5vw;
}
.start-button {
  width: 50%;
  height: 50%;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}
.button-text {
  font-size: 10vw;
}
</style>
