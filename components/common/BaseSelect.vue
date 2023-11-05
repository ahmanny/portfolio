<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

type Option = {
  label: string
  id: number | string
}

defineProps({
  modelValue: {
    type: Object as PropType<Option>,
    required: true,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
})

defineEmits(['update:model-value'])
</script>

<template>
  <Listbox
    :model-value="modelValue"
    @update:modelValue="(value: Option) => $emit('update:model-value', value)"
  >
    <ListboxButton>{{ modelValue.label }}</ListboxButton>
    <ListboxOptions>
      <ListboxOption v-for="option in options" :key="option.id" :value="option">
        {{ option.label }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
