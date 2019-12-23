<template>
  <div id="app" class="container">
    <header>
      <h1>Portfolio</h1>
    </header>
    <Skill></Skill>
    <History></History>
  </div>
</template>

<script>
import Skill from './components/Skill.vue'
import History from './components/History.vue'

export default {
  name: 'app',
  components: {
    Skill,
    History
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 60px;
  padding-right: 10px;
  padding-left: 10px;
}
header {
  font-size: 3rem;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
