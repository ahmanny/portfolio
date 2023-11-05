<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:model-value'])
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="
      $emit('update:model-value', ($event.target as HTMLInputElement).value)
    "
  />
</template>
