<script setup>
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'

const model = reactive({
  email: '',
  password: '',
  confirm_password: ''
})

const rules = {
  email: [
    { type: 'email', required: true, trigger: 'blur' },
    { type: 'string', required: true, trigger: 'input' }
  ],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 3, max: 6 }],
  confirm_password: [
    { type: 'string', required: true, trigger: 'blur', min: 3, max: 6 },
    { validator: (rule, value) => value === model.password, trigger: 'blur', message: '密码不一致' }
  ]
}

const formRef = ref()
async function submit() {
  try {
    await formRef.value.validate()
    createMessage({
      type: 'success',
      message: '验证通过'
    })
  } catch (e) {
    console.error(e)

    createMessage({
      type: 'danger',
      message: '验证失败'
    })
  }
}
function reset() {
  formRef.value?.resetFields()
  formRef.value?.clearValidate()
}
</script>

<template>
  <Form ref="formRef" :model="model" :rules="rules">
    <FormItem label="email" prop="email">
      <Input v-model="model.email" />
    </FormItem>
    <FormItem label="password" prop="password">
      <Input type="password" v-model="model.password" />
    </FormItem>
    <FormItem label="confirm password" prop="confirm_password">
      <template #label="{ label }">
        <b>{{ label }}</b>
      </template>
      <Input type="password" v-model="model.confirm_password" />
    </FormItem>
    <div style="display: flex; justify-content: center">
      <Button type="primary" @click="submit">Submit</Button>
      <Button @click="reset">Reset</Button>
    </div>
    <div>
      model:
      <pre>{{ model }}</pre>
    </div>
  </Form>
</template>
