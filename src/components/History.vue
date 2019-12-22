<template>
  <div class="history">
    <section>
      <h1>History</h1>
      <div>
        <canvas class="card" width=750 height=1500></canvas>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border: solid;
  border-color: lightgray;
}
</style>
