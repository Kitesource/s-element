<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'
const value = ref('Option1')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
<template>
  <Select v-model="value" placeholder="可清空选择器，请选择" clearable :options="options" />
  <div>{{ value }}</div>
</template>
