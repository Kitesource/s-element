<template>
  <div
    class="sk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <Tooltip
      placement="bottom-start"
      ref="tooltipRef"
      :popperOptions="popperOptions"
      effect="light"
      @click-outside="controlDropdown(false)"
      manual
    >
      <Input
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="filteredPlaceHolder"
        ref="inputRef"
        :readonly="!filterable || !isDropdownShow"
        @input="debounceFilter"
      >
        <template #suffix>
          <Icon
            v-if="showClearIcon"
            icon="circle-xmark"
            class="sk-input__clear"
            @mousedown.prevent="NOOP"
            @click.stop="onClear"
          />
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          />
        </template>
      </Input>
      <template #content>
        <div v-if="states.loading" class="sk-select__loading">
          <Icon icon="spinner" spin />
        </div>
        <div v-else-if="filterable && !filteredOptions.length" class="sk-select__nodata">
          no matching data
        </div>
        <ul v-else class="sk-select__menu">
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="sk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVNode :vNode="renderLabel ? renderLabel(item) : item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import type { Ref } from 'vue'
import { isFunction, debounce } from 'lodash-es'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import { cloneDeep } from '@/utils/util'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'
import type { InputInstance } from '@/components/Input/types'
import RenderVNode from '@/components/Common/RenderVnode'

const findOption = (value: string) => {
  const option = props.options.find((option) => option.value === value)
  return option ? option : null
}
defineOptions({
  name: 'SkSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  placeholder: '请选择',
  disabled: false,
  filterable: false,
  remote: false
})
const emits = defineEmits<SelectEmits>()

const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  mouseHover: false,
  loading: false
})
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles']
    }
  ]
}
const filteredOptions = ref(props.options)
watch(
  () => props.options,
  (val) => {
    filteredOptions.value = cloneDeep(val)
  },
  { deep: true }
)
function onFilter() {
  generateFilterOptions(states.inputValue)
}
const timeout = computed(() => (props.remote ? 300 : 0))
function debounceFilter() {
  return debounce(onFilter, timeout.value)()
}

async function generateFilterOptions(searchValue: string) {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch (error) {
      console.error(error)
      filteredOptions.value = []
    }
    states.loading = false
  } else {
    filteredOptions.value = props.options.filter((v) =>
      v.label?.toLowerCase().includes(searchValue?.toLowerCase())
    )
  }
}

const showClearIcon = computed(() => {
  return (
    props.clearable && states.selectedOption && states.mouseHover && states.inputValue.trim() !== ''
  )
})
function onClear(params: type) {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
function NOOP() {}

const filteredPlaceHolder = computed(() => {
  return props.filterable && states.selectedOption && isDropdownShow.value
    ? states.selectedOption.label
    : props.placeholder
})
const controlDropdown = (show: boolean) => {
  if (show) {
    if (props.filterable) {
      if (states.selectedOption) {
        // filterable 下 清空之前选择的值
        states.inputValue = ''
      }
      // 选择值后重新生成 options
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    if (props.filterable && states.selectedOption) {
      // blur时将之前的值回显
      states.inputValue = states.selectedOption.label
    }
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
