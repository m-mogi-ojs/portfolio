<template>
  <nav class="nav">
    <div>
      <span>Header Title</span>
      <a class="active" href="index.html">Dummy1</a>
      <a href="item.html">Dummy2</a>
      <a href="shop.html">Dummy3</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.nav span{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
}
.nav a:hover {
  background-color: #ddd;
  color: black;
}
.nav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
