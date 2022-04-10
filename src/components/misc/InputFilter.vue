<template>
  <input
        v-model="keyword"
        type="text"
        class="search-input shadow-sm focus:ring-indigo-700 focus:border-indigo-500 block w-full sm:text-sm rounded-md max-w-xs px-4 py-2 mb-4"
        :placeholder="placeholder"
    />
</template>

<script>
import { debounce } from 'lodash'

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return {
      keyword: ''
    }
  },

  watch: {
    keyword () {
      this.onChange()
    }
  },

  methods: {
    onChange: debounce(function () {
      this.$emit('change', this.keyword)
    }, 500)
  }
}
</script>

<style scoped>
    .search-input {
    border: 1px solid #ccc;
    }
</style>
