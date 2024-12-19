<script setup>
import { useMyThemeStore } from '@/stores/theme.store'
import { ref, onMounted } from 'vue'

const themeStore = useMyThemeStore()
const isThemeApplied = ref(false)

onMounted(async () => {
  await themeStore.applyTheme()
  isThemeApplied.value = true
})
</script>

<template>
  <div class="body">
    <loading v-show="!isThemeApplied" />
    <div v-show="isThemeApplied">
      <NuxtPage />
    </div>
  </div>
</template>
