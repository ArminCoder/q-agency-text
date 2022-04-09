<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="comment in comments" :key="comment.id" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm font-medium">{{ comment.name }}</h3>
          </div>
          <p class="mt-1 text-gray-500 text-sm">{{ comment.body }}</p>
        </div>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:${comment.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <span class="ml-3 truncate">{{comment.email}}</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CommentsView',

  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
}
</script>
