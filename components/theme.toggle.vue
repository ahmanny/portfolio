<template>
  <button
    @click="themeStore.toggleTheme"
    :class="[
      ' flex h-[48px] w-[48px] items-center justify-center rounded-lg pt-3 text-[45px]  text-[#F78F42]  hover:text-opacity-70 xl:pt-0',
    ]"
  >
    <i class="mdi mdi-format-color-fill"></i>
  </button>
</template>

<script setup>
const themeStore = useMyThemeStore()
</script>
