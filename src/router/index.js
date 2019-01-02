import Vue from 'vue'
import Router from 'vue-router'
// import Top from '@/components/pages/Top'
import Skill from '@/components/pages/Skill'
import History from '@/components/pages/History'
import Service from '@/components/pages/Service'
import MiniGame from '@/components/pages/MiniGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/minigame',
      name: 'MiniGame',
      component: MiniGame
    }
  ]
})
