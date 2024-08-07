<script lang="ts" setup>
import { isArray, isNil } from 'lodash-es'
import { inject, computed, reactive, provide } from 'vue'
import Schema from 'async-validator'
import type { FormItemProps, FormValidateFailure, FormItemContext } from './type'
import { formContextKey, formItemContextKey } from './type'

defineOptions({
  name: 'SkFormItem'
})
const props = defineProps<FormItemProps>()

const formContext = inject(formContextKey)
const validateStatus = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  }
  return null
})

const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  }
  return null
})

function getTriggeredRules(trigger?: string) {
  const rules = itemRules.value
  if (rules) {
    return rules.filter((v) => {
      if (!v.trigger || !trigger) return true
      if (isArray(v.trigger)) {
        return v.trigger.includes(trigger)
      }
      return v.trigger === trigger
    })
  }
  return []
}
const validate = (trigger?: string) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if (triggeredRules.length === 0) return true
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggeredRules
    })
    validateStatus.loading = true
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success'
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg = errors?.[0]?.message ?? ''
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}

const context: FormItemContext = {
  validate
}
provide(formItemContextKey, context)
</script>

<template>
  <div
    class="sk-form-item"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading
    }"
  >
    <label class="sk-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="sk-form-item__content">
      <slot :validate="validate" />
      <div v-if="validateStatus.state === 'error'" class="sk-form-item__error-msg">
        {{ validateStatus.errorMsg }}
      </div>
      {{ innerValue }} - {{ itemRules }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
