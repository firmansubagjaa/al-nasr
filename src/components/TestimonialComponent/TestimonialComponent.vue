<template>
  <section class="container h-full py-40 tracking-wider flex justify-start items-center">
    <div>
      <div class="text-right flex flex-col gap-5">
        <h2 class="font-semibold text-5xl leading-[3rem]">
          Testimonial from our <br />
          customers
        </h2>
        <p>
          We have 100.000+ customers, here are our customer <br />
          testimonials
        </p>
      </div>
      <div class="flex flex-wrap gap-5">
        <testimonial-item
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :packageItem="item.package"
          :rating="item.rating"
          :comment="item.comment"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dataTestimonial from './dataTestimonial'
import TestimonialItem from './TestimonialItem.vue'

export default defineComponent({
  components: {
    TestimonialItem
  },
  data() {
    return {
      items: dataTestimonial
    }
  }
})
</script>
