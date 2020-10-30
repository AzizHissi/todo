import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../components/Todos.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
    props: { search: '' }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
 
]

const router = new VueRouter({
  routes
})

export default router
