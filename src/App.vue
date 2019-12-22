<template>
  <div id="app" class="container">
    <header>
      <h1>Portfolio</h1>
    </header>
    <OverView></OverView>
    <Skill></Skill>
    <History></History>
    <Service></Service>
    <MiniGame></MiniGame>
  </div>
</template>

<script>
import OverView from './components/OverView.vue'
import Skill from './components/Skill.vue'
import History from './components/History.vue'
import Service from './components/Service.vue'
import MiniGame from './components/MiniGame.vue'

export default {
  name: 'app',
  components: {
    OverView,
    Skill,
    Service,
    MiniGame,
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
