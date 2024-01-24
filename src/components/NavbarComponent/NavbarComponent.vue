<script lang="ts" setup>
import logoImg from '@/assets/images/webp/Logo.webp'
</script>

<template>
  <header class="bg-white fixed w-full top-0 z-[2]">
    <div class="container flex justify-between items-center py-5">
      <div>
        <img :src="logoImg" alt="logo" class="w-32" />
      </div>
      <data-item class="hidden lg:flex">
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </data-item>
      <div>
        <button
          class="bg-[#ffc757] px-6 py-3 lg:px-8 rounded-md transition ease-in-out duration-300 hover:bg-[#d68f00] active:bg-[#bc7d00]"
        >
          Contact Us
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataItem from './DataItem.vue'

export default defineComponent({
  components: {
    DataItem
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'home'
        },
        {
          id: 2,
          title: 'about'
        },
        {
          id: 3,
          title: 'package'
        },
        {
          id: 4,
          title: 'facilities'
        },
        {
          id: 5,
          title: 'gallery'
        }
      ]
    }
  }
})
</script>
