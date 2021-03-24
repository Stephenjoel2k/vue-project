import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TopTracks from '../views/TopTracks.vue'
import TopArtists from '../views/TopArtists.vue'
import Recent from '../views/Recent.vue'

Vue.use(VueRouter)

//Make sure the Home page doesn't heve the navbar
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top-tracks',
    name: 'Top Tracks',
    component: TopTracks
  },
  {
    path: '/top-artists',
    name: 'Top Artists',
    component: TopArtists
  },
  {
    path: '/recently-played',
    name: 'Recent',
    component: Recent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
