<template>
  <section class="bg-[#f2fffe] h-full flex py-10 justify-center items-center tracking-wide">
    <div
      class="container flex flex-col-reverse lg:flex-row gap-10 lg:gap-48 justify-between items-center"
    >
      <div>
        <feature-image />
      </div>
      <div class="flex flex-col gap-5">
        <feature-text>
          <template #title>{{ title }}</template>
          <template #paragraph>{{ paragraph }}</template>
          <template #list>
            <li v-for="item in items" :key="item.id" class="flex items-center gap-5">
              <div class="w-7 h-7 bg-[#b8fffb] rounded-lg flex justify-center items-center">
                <div class="w-3 h-3 bg-[#00ae9a] rounded-full"></div>
              </div>
              <span>{{ item.list }}</span>
            </li>
          </template>
          <template #learn-more>
            <button
              class="bg-[#ffc757] py-4 px-10 rounded-lg transition ease-in-out duration-300 hover:bg-[#d68f00] active:bg-[#bc7d00]"
            >
              Learn more
            </button>
          </template>
          <template #contact-us>
            <button
              class="border-2 border-[#ffc757] py-4 px-10 rounded-lg text-[#ffc757] transition ease-in-out duration-300 hover:bg-[#ffc757] hover:text-black active:bg-[#bc7d00]"
            >
              Contact Us
            </button>
          </template>
        </feature-text>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatureImage from './FeatureImage.vue'
import FeatureText from './FeatureText.vue'

export default defineComponent({
  components: {
    FeatureImage,
    FeatureText
  },
  data() {
    return {
      title: 'A Wonderfull Agency To Fullfill Your Dream',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem voluptatem ratione, quas dolores quasi iusto laudantium incidunt neque et nobis doloremque magni quidem libero? Similique cupiditate quod quis saepe!',
      items: [
        {
          id: 1,
          list: 'Flight Jakarta Saudi - Saudi Jakarta'
        },
        {
          id: 2,
          list: 'Tickets are included in the cost'
        },
        {
          id: 3,
          list: 'Comfortable hotel with a rating of 4'
        },
        {
          id: 4,
          list: "We cover the Visa Fee and it's included"
        }
      ]
    }
  }
})
</script>
