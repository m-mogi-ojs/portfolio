<template>
  <header>
    <a href="/"><div>{{ msg }}</div></a>
    <nav>
      <ul>
        <li><a href="skill"><img src="../../assets/icon-pencil.png" alt="Skill" width="20" height="20">Skill</a></li>
        <li><a href="history"><img src="../../assets/icon-book.png" alt="Skill" width="20" height="20">History</a></li>
        <li><a href="service"><img src="../../assets/icon-cloud.png" alt="Skill" width="20" height="20">Service</a></li>
        <li><a href="minigame"><img src="../../assets/icon-game.png" alt="Skill" width="20" height="20">Mini Game</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data () {
    return {
      msg: 'Portfolio App'
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #dddddd;
  overflow: hidden;
}
nav li{
  font-size: 20px;
  display:inline-block;
  padding: 0 15px;
}
div {
  font-size: 48px;
}
a {
  color: #222222;
  text-decoration: none;
  height: 20px;
}
nav a:hover {
  background-color: #ddd;
  color: black;
}
nav a.active {
  background-color: #4CAF50;
  color: white;
}
img {
  position:relative;
  height:27px;
  width:27px;
}
</style>
