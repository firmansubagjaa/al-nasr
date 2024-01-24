<template>
  <h1 class="text-3xl lg:text-5xl w-full lg:w-[27rem] tracking-widest font-bold">
    <slot name="title"></slot>
  </h1>
  <p class="w-full lg:w-[27rem]">
    <slot name="description"></slot>
  </p>
  <div>
    <button
      class="bg-[#ffc757] py-3 px-8 rounded-md transition ease-in-out duration-300 hover:bg-[#d68f00] active:bg-[#bc7d00]"
    >
      <slot name="button"></slot>
    </button>
  </div>
</template>
