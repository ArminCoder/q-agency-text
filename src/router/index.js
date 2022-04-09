import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
