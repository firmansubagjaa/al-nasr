<template>
  <h2 class="text-5xl font-bold"><slot name="title"></slot></h2>
  <p>
    <slot name="paragraph"></slot>
  </p>
  <ul class="flex flex-col gap-3">
    <slot name="list"></slot>
  </ul>
  <div class="flex gap-5">
    <slot name="learn-more"></slot>
    <slot name="contact-us"></slot>
  </div>
</template>
