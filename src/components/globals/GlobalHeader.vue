<template>
  <header>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <router-link class="title" to="/">{{ msg }}</router-link>
        </div>
      </div>
      <nav>
        <div class="tabs is-boxed is-centered main-menu">
          <ul>
            <router-link tag="li" exact to="skill"><a><img class="icon" src="../../assets/img/icon-pencil.png" alt="Skill" align="left">Skill</a></router-link>
            <router-link tag="li" exact to="history"><a><img class="icon" src="../../assets/img/icon-book.png" alt="History" align="left">History</a></router-link>
            <router-link tag="li" exact to="service"><a><img class="icon" src="../../assets/img/icon-cloud.png" alt="Service" align="left">Service</a></router-link>
            <router-link tag="li" exact to="minigame"><a><img class="icon" src="../../assets/img/icon-game.png" alt="Mini Game" align="left">Mini Game</a></router-link>
          </ul>
        </div>
      </nav>
    </section>
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
.tabs {
  display: none;
}
</style>
