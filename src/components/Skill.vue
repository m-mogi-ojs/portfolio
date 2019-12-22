<template>
  <div class="skill">
    <section>
      <h1>Skill</h1>
      <SkillCard
        :title="clientSkillCard.title"
        :details="clientSkillCard.details"
        :card-image-class="clientSkillCard.cardImageClass"
        ref="clientSkillCard"
      ></SkillCard>
      <SkillCard
        :title="serverSkillCard.title"
        :details="serverSkillCard.details"
        :card-image-class="serverSkillCard.cardImageClass"
      ></SkillCard>
      <SkillCard
        :title="devtoolsSkillCard.title"
        :details="devtoolsSkillCard.details"
        :card-image-class="devtoolsSkillCard.cardImageClass"
      ></SkillCard>
    </section>
  </div>
</template>

<script>
import SkillCard from './SkillCard.vue'

export default {
  name: 'Skill',
  components: {
    SkillCard
  },
  data () {
    return {
      clientSkillCard: {
        title: 'Client side skill',
        details: [{
          label: 'Vue.js',
          contents: '実務1年',
          imageClass: 'devicon-vuejs-plain colored'
        },
        {
          label: 'JQuery',
          contents: 'テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。テストメッセージ。',
          imageClass: 'devicon-jquery-plain colored'
        }
        ],
        cardImageClass: 'fas fa-laptop-code fa-4x'
      },
      serverSkillCard: {
        title: 'Server side skill',
        details: [{
          label: 'Ruby on Rails',
          contents: '実務1年',
          imageClass: 'devicon-rails-plain colored'
        }],
        cardImageClass: 'fas fa-server fa-4x'
      },
      devtoolsSkillCard: {
        title: 'Dev tools skill',
        details: [{
          label: 'Visual Studio Code',
          contents: '実務1年',
          imageClass: ''
        }],
        cardImageClass: 'fas fa-tools fa-4x'
      }
    }
  },
  mounted () {
    console.log(this.$refs.clientSKillCard)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.skill {
  display: flex;
  justify-content: center;
}
.skill-card {
  margin-top: 2rem;
}
</style>
