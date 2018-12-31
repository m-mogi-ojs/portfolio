<template>
  <header>
    <div id="header-title"><router-link to="/">{{ msg }}</router-link></div>
    <nav>
      <ul>
        <router-link tag="li" exact to="skill"><img src="../../assets/icon-pencil.png" alt="Skill" align="left"><a>Skill</a></router-link>
        <router-link tag="li" exact to="history"><img src="../../assets/icon-book.png" alt="History" align="left"><a>History</a></router-link>
        <router-link tag="li" exact to="service"><img src="../../assets/icon-cloud.png" alt="Service" align="left"><a>Service</a></router-link>
        <router-link tag="li" exact to="minigame"><img src="../../assets/icon-game.png" alt="Mini Game" align="left"><a>Mini Game</a></router-link>
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
header {
  text-align: center;
}
nav {
  background-color: #eeeeee;
  overflow: hidden;
  height: 36px;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
nav li{
  display:inline-block;
  padding: 0 15px;
}
#header-title {
  font-size: 48px;
}
a {
  color: #222222;
  text-decoration: none;
}
li a {
  font-size: 26px;
}
nav li:hover {
  background-color: #ddd;
  color: black;
}
nav .router-link-active {
  background-color: #cccccc;
  color: black;
}
img {
  position:relative;
  height:32px;
  width:32px;
  top: 2px;
}
</style>
