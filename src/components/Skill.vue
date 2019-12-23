<template>
  <div class="skill">
    <section>
      <h1>Skill</h1>
      <SkillCard
        v-for="d in skillMasterData"
        :key="d.title"
        :title="d.title"
        :details="d.details"
        :card-image-class="d.cardImageClass"
      ></SkillCard>
    </section>
  </div>
</template>

<script>
import SkillCard from './SkillCard.vue'
import { SkillMasterData } from './../assets/javascript/SkillMasterData.js'

export default {
  name: 'Skill',
  components: {
    SkillCard
  },
  data () {
    return {
      skillMasterData: SkillMasterData
    }
  },
  mounted () {
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
