<script lang="ts" setup>
import { provide } from 'vue'
import type { FormProps } from './type'
import { formContextKey } from './type'

defineOptions({
  name: 'SkForm'
})

const props = defineProps<FormProps>()
provide(formContextKey, props)
</script>

<template>
  <div class="sk-form">
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
