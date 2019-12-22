<template>
  <div class="skill-card">
    <section>
      <i :class="[cardImageClass]"></i>
      <h1 class="title">{{ title }}</h1>
      <ul>
        <li v-for="detail in details" :key="detail.title">
          <i v-if="detail.imageClass" :class="[detail.imageClass]" class="label-image"></i>
          <div class="label">{{ detail.label }}</div>
          <div class="contents">{{ detail.contents }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default title!'
    },
    details: {
      type: Array,
      required: true,
      default: function () {
        return [{ label: 'Default label!', contents: 'Default contents!' }]
      }
    },
    cardImageClass: {
      type: String,
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$border: solid;
$border-width: 0.05rem;
$border-color: lightgray;

i {
  font-size: 3rem;
  margin-bottom: 1rem;
}
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
  border-bottom: $border;
  border-width: $border-width;
  border-color: $border-color;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  @include mq() {
    flex-wrap: wrap;
  }
}
.skill-card {
  border: $border;
  border-radius: 0.3rem;
  border-width: $border-width;
  border-color: $border-color;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem rgba(0,0,0,0.1);
}
.title {
  border-bottom: $border;
  border-width: $border-width;
  border-color: $border-color;
}
.label-image {
  flex-basis: 10%;
  padding-right: 4rem;
}
.label {
  font-size: 1.5rem;
  flex-basis: 20%;
  white-space: nowrap;
}
.contents {
  flex-basis: 70%;
}
</style>
