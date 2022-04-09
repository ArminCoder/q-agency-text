import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: [],
    comments: []
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
    comments: state => state.comments
  },
  mutations: {
    SET_POSTS (state, data) {
      state.posts = data
    },
    SET_POST (state, data) {
      state.post = data
    },
    SET_COMMENTS (state, data) {
      state.comments = data
    }
  },
  actions: {
    setPosts ({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts').then(r => {
        commit('SET_POSTS', r.data)
      })
    },
    setPost ({ commit }, postId) {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(r => {
        commit('SET_POST', r.data)
      })
    },
    setPostComments ({ commit }, postId) {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(r => {
        commit('SET_COMMENTS', r.data)
      })
    },
    filterPosts ({ commit }, search) {
      return axios.get(`https://jsonplaceholder.typicode.com/posts?q=${search}`).then(r => {
        commit('SET_POSTS', r.data)
      })
    }
  },
  modules: {
  }
})
