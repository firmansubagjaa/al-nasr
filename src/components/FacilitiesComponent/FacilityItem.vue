<template>
  <div class="bg-white w-full h-[7.5rem] p-3 rounded-xl flex items-start gap-5 shadow-lg">
    <div>
      <div class="bg-[#b8fffb] w-10 h-10 rounded-lg flex justify-center items-center">
        <div class="bg-[#00ae9a] w-7 h-7 rounded-xl" />
      </div>
    </div>
    <div>
      <h2 class="font-semibold text-lg">{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      require: true
    },
    desc: {
      type: String as PropType<string>,
      require: true
    }
  }
})
</script>
