<template>
  <div class="top-background">
    <router-link to="A" append>To A</router-link>
    <div id="canvas-container">
      <canvas id="game-canvas"></canvas>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-background {
  background-color: azure;
  opacity: 0.8;
}

</style>

<script>
export default {
  name: 'Top'
}

</script>
