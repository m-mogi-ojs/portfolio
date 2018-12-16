<template>
  <footer class="footer">
    <div>
      <a href="index.html">Dummy1</a>
      <a href="item.html">Dummy2</a>
      <a href="shop.html">Dummy3</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter'
}
</script>

<style scoped>
.footer {
  background-color: #333;
  overflow: hidden;
}
.footer a{
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.footer a:hover {
  background-color: #ddd;
  color: black;
}
</style>
