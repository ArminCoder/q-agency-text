<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <comment-card v-for="comment in comments" :key="comment.id"  :comment="comment" />
  </ul>
</template>

<script>
import CommentCard from '@/components/Comments/CommentCard'

export default {
  name: 'CommentsView',

  components: {
    CommentCard
  },

  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
}
</script>
