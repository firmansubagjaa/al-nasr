<template>
  <div
    class="bg-white flex items-start shadow-lg rounded-lg w-[22.5rem] lg:w-[24rem] h-60 lg:h-48 gap-5 p-3"
  >
    <div class="flex flex-col gap-5 items-center">
      <div class="bg-emerald-500 w-28 h-28 rounded-xl"></div>
      <div
        class="bg-[#b8fffb] text-[#00ae9a] font-semibold px-10 py-1 w-14 flex justify-center items-center rounded-full"
      >
        <p>{{ rating }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div class="bg-[#b8fffb] text-center rounded-full py-1 w-52">
        <p class="font-semibold text-[#00ae9a] text-sm">{{ packageItem }}</p>
      </div>
      <p class="font-semibold text-xl text-gray-500">{{ name }}</p>
      <p class="text-sm">
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: Number as PropType<number>,
      require: true
    },
    name: {
      type: String as PropType<string>,
      require: true
    },
    packageItem: {
      type: String as PropType<string>,
      require: true
    },
    rating: {
      type: Number as PropType<number>,
      require: true
    },
    comment: {
      type: String as PropType<string>,
      require: true
    }
  }
})
</script>
