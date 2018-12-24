<template>
  <header>
    <a href="/"><div>{{ msg }}</div></a>
    <nav>
      <ul>
        <li><a href="skill">Skill</a></li>
        <li><a href="history">History</a></li>
        <li><a href="service">Service</a></li>
        <li><a href="minigame">Mini Game</a></li>
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
  background-color: #333;
  overflow: hidden;
}
nav li{
  color: #f2f2f2;
  font-size: 20px;
  display:inline-block;
  padding: 0 15px;
}
div {
  font-size: 48px;
}
a {
  color: #f2f2f2;
  text-decoration: none;
}
nav a:hover {
  background-color: #ddd;
  color: black;
}
nav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
