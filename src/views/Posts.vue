<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Posts</h1>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
    <div>
      <div class="mt-1">
        <input-filter placeholder="Search posts by users" @change="filterPosts" />
      </div>
    </div>
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  ></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="post in posts" :key="post.id">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-left"
                  >
                    {{ post.id }}
                  </td>
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-left"
                  >
                    {{ post.title }}
                  </td>
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-left"
                  >
                    <router-link
                      :to="{ name: 'post', params: { id: post.id } }"
                      class="text-blue-500 hover:text-blue-700"
                      >View</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputFilter from '@/components/misc/InputFilter'

export default {
  name: 'HomeView',

  components: {
    InputFilter
  },

  mounted () {
    this.getPosts()
  },

  methods: {
    getPosts () {
      this.$store.dispatch('setPosts')
    },

    filterPosts (keyword) {
      this.$store.dispatch('filterPosts', keyword)
    }
  },

  computed: {
    ...mapGetters(['posts'])
  }
}
</script>
