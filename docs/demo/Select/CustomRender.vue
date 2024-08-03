<script lang="ts" setup>
import { ref, h } from 'vue'
import Select from '@/components/Select/Select.vue'

const value = ref('')
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
const customRender = (option) => {
  return h(
    'div',
    { style: { display: 'flex', 'justify-content': 'space-between', width: '100%' } },
    [h('b', null, option.label), h('span', null, option.value)]
  )
}
</script>
<template>
  <Select v-model="value" :options="options" :renderLabel="customRender" />
</template>

<style scoped></style>
