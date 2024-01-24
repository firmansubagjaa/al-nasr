<template>
  <section class="h-full flex justify-center py-10 items-center">
    <div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
      <div class="flex flex-col gap-4">
        <hero-breadcumb>{{ breadcumbText }}</hero-breadcumb>
        <hero-text>
          <template #title> {{ title }} </template>
          <template #description>
            {{ description }}
          </template>
          <template #button>{{ button }}</template>
        </hero-text>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-[20rem] lg:w-[32rem] h-48 bg-[#00ae9a] relative top-60 -z-[1] rounded-xl" />
        <div>
          <img
            src="/src/assets/images/webp/hero-image.webp"
            alt="hero"
            class="w-64 h-96 lg:w-96 lg:h-[28rem] bg-gray-700 rounded-lg object-cover relative -top-20 z-[1]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroBreadcumb from './HeroBreadcumb.vue'
import HeroText from './HeroText.vue'

export default defineComponent({
  components: {
    HeroBreadcumb,
    HeroText
  },
  data() {
    return {
      breadcumbText: 'No.1 in Indonesia',
      title: 'Make it easy for your Umroh worship with Al Nasr Travel',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor optio atque accusamus maxime voluptatem laborum. Accusamus tempore magnam id quisquam ut nisi optio magni isteadipisci aperiam, amet ipsa dicta.',
      button: 'Contact Us'
    }
  }
})
</script>
