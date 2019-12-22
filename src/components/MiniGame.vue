<template>
  <div class="mini-game">
    <section>
      <h1>MiniGame</h1>
      <div class="canvas-wrapper">
        <canvas></canvas>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MiniGame'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.canvas-wrapper {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  border: solid;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}
</style>
