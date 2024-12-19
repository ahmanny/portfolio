<template>
  <div
    class="flex h-[320px] items-center justify-center gap-[40px] md:h-[350px] md:px-[34px] xl:h-[492px] xl:justify-between 2xl:px-[64px]"
  >
    <img src="/assets/css/flyer.png" alt="" />
    <div
      class="flex w-full flex-col items-center justify-center gap-[24px] md:w-[400px] md:items-start xl:w-[660px]"
    >
      <h1
        class="text-center text-2xl font-semibold md:text-left xl:text-left xl:text-5xl"
        >Transforming concepts into powerful web applications.</h1
      >
      <p
        class="text_base2 text_base2_dark text-center text-base md:text-left xl:text-lg"
        >I specialize in full-stack web development, delivering intuitive user
        interfaces and robust backend systems.</p
      >
      <button
        onclick=" 
  if (document.getElementById('contact')) {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }"
        class="flex h-[56px] w-[155px] items-center justify-between rounded-full bg-orange-500 pl-[28px] pr-[15px] shadow-md transition-all duration-300 hover:bg-orange-600 xl:w-[182px]"
        ><span class="text-xs font-medium text-black">Let’s Talk</span>
        <span
          class="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black"
          ><i class="mdi mdi-arrow-right text-[34px] text-[#F78F42]"></i
        ></span>
      </button>
    </div>
    <!-- <div class="hidden h-full w-[350px] overflow-hidden md:block"> </div> -->
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
