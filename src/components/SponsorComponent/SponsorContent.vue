<template>
  <section class="tracking-wide h-full py-32 flex justify-center items-center">
    <div class="container space-y-20 lg:flex justify-between items-center">
      <div class="text-2xl space-y-3 px-5">
        <h2 class="font-semibold w-32">Airways Comodation</h2>
        <p class="w-80 text-lg">We cooperate with several airlines for Umrah and Hajj</p>
        <p
          class="bg-[#b8fffb] text-[#00ae9a] py-3 px-4 w-32 text-lg text-center rounded-full font-semibold"
        >
          5.0 Rating
        </p>
      </div>
      <marquee-text class="z-[1]">
        <div class="flex rounded-lg gap-24 px-12">
          <img
            v-for="item in img"
            :key="item.id"
            :src="item.link"
            alt=""
            class="w-full h-11 lg:h-[5.9rem] object-cover"
          />
        </div>
      </marquee-text>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dataSponsor from './DataSponsor'

export default defineComponent({
  data() {
    return {
      img: dataSponsor
    }
  }
})
</script>
