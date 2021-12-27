<template>
  <label class="block sticky py-2 bg-white dark:bg-gray-900" style="top: 65px">
    Preview Text:
    <input
      class="border border-indigo-600 ml-4 pl-2 text-gray-700"
      v-model="text"
    />
  </label>
</template>

<script>

export default {
  data() {
    return {
      text: 'Hello World'
    }
  },
  watch:  {
    text(val) {
      this.$bus.$emit('textChange', val)
    }
  }
}
</script>

<style>

</style>
