<template>
  <Select
    v-model="value"
    filterable
    remote
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading"
    style="width: 240px"
  >
  </Select>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Select from '@/components/Select/Select.vue'

interface ListItem {
  value: string
  label: string
}

const list = ref<ListItem[]>([])
const value = ref<string[]>('')
const loading = ref(false)

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})

const remoteMethod = (query: string) => {
  return new Promise((resolve) => {
    if (query) {
      loading.value = true
      return setTimeout(() => {
        loading.value = false
        const options = list.value.filter((item) => {
          return item.label.toLowerCase().includes(query.toLowerCase())
        })
        resolve(options)
      }, 500)
    } else {
      resolve([])
    }
  })
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]
</script>
