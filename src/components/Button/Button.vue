<template>
  <button
    ref="instance"
    class="sk-button"
    :class="{
      [`sk-button--${type}`]: type,
      [`sk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
  name: 'SkButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const instance = ref<HTMLButtonElement>()

defineExpose({
  ref: instance
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
