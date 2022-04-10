<template>
  <div>
    <div class="mt-8 bg-white shadow overflow-hidden sm:rounded-lg max-w-3xl mx-auto h-full">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Post Details
        </h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">ID</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{post.id}}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Title</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{post.title}}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Body</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{post.body}}
            </dd>
          </div>
        </dl>
      </div>
      <div class="bg-indigo-200 p-3">
        <div v-if="comments.length" >
           <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
            Comments:
          </h3>
          <comments :comments="comments" />
        </div>
        <div v-else>This post has no comments yet.</div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto pt-4">
      <router-link :to="{ name: 'posts' }" class="text-blue-500 hover:text-indigo-700">Back To Posts</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Comments from '@/components/Comments/Comments'

export default {
  name: 'SinglePostView',

  components: { Comments },

  computed: {
    ...mapGetters([
      'post',
      'comments'
    ])
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      this.$store.dispatch('setPost', this.$route.params.id)
      this.$store.dispatch('setPostComments', this.$route.params.id)
    }
  }
}
</script>
