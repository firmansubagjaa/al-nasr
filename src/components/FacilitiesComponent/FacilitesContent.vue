<template>
  <section class="bg-[#f2fffe] h-full py-32 flex justify-start items-center tracking-wider">
    <div class="container flex flex-col justify-start items-center gap-5">
      <div class="flex items-center flex-col text-center gap-5">
        <h2 class="font-bold text-5xl">Facilities We Provide For You</h2>
        <p class="text-lg lg:w-[34rem]">
          We provide comfort for our customers, with the various facilities we provide that we
          provide
        </p>
      </div>

      <marquee-text class="z-[1] w-full" :duration="30">
        <div class="flex gap-5 px-3 rounded-lg h-full justify-center items-center">
          <facility-item
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :desc="item.desc"
          />
        </div>
      </marquee-text>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FacilityItem from './FacilityItem.vue'
import itemFacilities from './DataFacility'

export default defineComponent({
  components: {
    FacilityItem
  },
  data() {
    return {
      items: itemFacilities
    }
  }
})
</script>
