<template>
  <div class="history">
    <HistoryCard
      :title="card.title"
      :details="card.details"
      :card-image-class="card.cardImageClass"
      ref="card"
    ></HistoryCard>
  </div>
</template>

<script>
import HistoryCard from './HistoryCard.vue'

export default {
  name: 'History',
  components: {
    HistoryCard
  },
  data () {
    return {
      card: {
        title: 'History',
        details: [{
          officeName: 'CompanyA',
          project: [{
            projectName: '',
            period: '',
            contents: '',
            devTools: []
          }]
        }, {
          officeName: 'CompanyB',
          project: [{
            projectName: '',
            period: '',
            contents: '',
            devTools: []
          }]
        }
        ],
        cardImageClass: 'fas fa-history fa-4x'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border: solid;
  border-color: lightgray;
}
.history-card {
  margin-top: 2rem;
}
</style>
