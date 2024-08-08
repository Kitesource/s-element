<script lang="ts" setup>
import { provide } from 'vue'
import type {
  FormItemContext,
  FormProps,
  FormValidateFailure,
  FormInstance,
  FormContext
} from './type'
import { formContextKey } from './type'
import type { ValidateFieldsError } from 'async-validator'

defineOptions({
  name: 'SkForm'
})

const props = defineProps<FormProps>()
const fields: FormItemContext[] = []

function addField(field: FormItemContext) {
  fields.push(field)
}
function removeField(field: FormItemContext) {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

async function validate() {
  let validateErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      const error = e as FormValidateFailure
      validateErrors = {
        ...validateErrors,
        ...error.fields
      }
    }
  }
  if (Object.keys(validateErrors).length === 0) return true
  return Promise.reject(validateErrors)
}
const resetFields = (keys: string[] = []) => {
  const filteredFields = keys?.length ? fields.filter((_) => keys.includes(_.prop!)) : fields
  filteredFields.forEach((_) => _.resetField())
}
const clearValidate = (keys: string[] = []) => {
  const filteredFields = keys?.length ? fields.filter((_) => keys.includes(_.prop!)) : fields
  filteredFields.forEach((_) => _.clearValidate())
}

provide<FormContext>(formContextKey, {
  ...props,
  addField,
  removeField
})

defineExpose<FormInstance>({
  validate,
  clearValidate,
  resetFields
})
</script>

<template>
  <div class="sk-form">
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
