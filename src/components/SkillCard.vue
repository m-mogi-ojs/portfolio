<template>
  <div class="skill-card">
    <section :class="[onEffectClasses]">
      <i :class="[cardImageClass, isDisplayElement ? 'onLoadedEffect' : '' ]"></i>
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
const notVisible = 'notVisible'

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
  },
  data () {
    return {
      onEffectClasses: ['notVisible'],
      scrollY: 0,
      positionY: 0,
      isDisplayElement: false,
      clientHeight: 0
    }
  },
  mounted () {
    // let func = function () {
    //   // this.onEffectClasses.push(onLoadedEffectClass)
    //   this.onEffectClasses.shift()
    // }.bind(this)
    // setTimeout(func, 1000)

    window.addEventListener('scroll', this.handleScroll)
    this.clientHeight = this.$el.getBoundingClientRect().height
    this.handleScroll()
  },
  methods: {
    handleScroll: function () {
      this.$nextTick(function () {
        this.scrollY = window.scrollY
        this.positionY = this.$el.getBoundingClientRect().y
      }.bind(this))

      /**
       * 画面下の判定
       * 画面最上部との距離 + 要素サイズ > 0
       * かつ
       * 画面上の判定
       * 画面最上部との距離 < 画面サイズ
       */
      if (this.positionY + this.clientHeight > 0 && this.positionY < window.innerHeight) {
        this.isDisplayElement = true
        let i = this.onEffectClasses.indexOf(notVisible)
        if (i >= 0) {
          this.onEffectClasses.splice(i, 1)
        }
        return
      }
      this.isDisplayElement = false
      if (this.onEffectClasses.indexOf(notVisible) === -1) {
        this.onEffectClasses.push(notVisible)
      }
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
section {
  transition: all 1s ease-in 0.2s;
}
.skill-card {
  border: $border;
  border-radius: 0.3rem;
  border-width: $border-width;
  border-color: $border-color;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem rgba(0,0,0,0.1);
  transition: all 1s ease-in 0.2s;
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
.onLoadedEffect {
  opacity: 1.0;
}
.notVisible {
  opacity: 0.0;
}
</style>
