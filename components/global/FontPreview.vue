<template>
  <div class="max-h-40 overflow-scroll" style="max-height: 30rem">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(font, index) in fontList" :key="index" style="height: 3.25rem; line-height: 2.25rem">
          <td class="w-1/2">{{ font }}</td>
          <td :style="{ fontFamily: font }" class="text-xl">{{ previewText }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fontList } from '@storipress/fonts/font-list.js'

export default {
  props: {
    filter: {
      type: String,
      default: "display"
    }
  },
  data() {
    return {
      previewText: 'Hello World'
    }
  },
  computed: {
    fontList() {
      return fontList[this.filter]
    }
  },
  created() {
    this.$bus.$on('textChange', text => {
      this.previewText = text
    })
  },
  beforeDestroy () {
    this.$bus.$off('textChange')
  },
}
</script>
