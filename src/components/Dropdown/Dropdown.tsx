import { computed, defineComponent, Fragment, ref } from 'vue'
import type { PropType } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import type { MenuOption } from './types'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'

export default defineComponent({
  name: 'SkDropdown',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover'
    },
    effect: {
      type: String as PropType<'dark' | 'light'>,
      default: 'light'
    },
    transition: {
      type: String,
      default: 'fade'
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object as PropType<Options>
    },
    menuOptions: {
      type: Array as PropType<MenuOption[]>,
      required: true
    },
    hideAfterClick: {
      type: Boolean,
      default: true
    },
    manual: {
      type: Boolean
    }
  },
  emits: ['visible-change', 'select'],
  setup(props, { slots, emit, expose }) {
    const tooltipRef = ref<TooltipInstance | null>(null)
    const itemClick = (e: MenuOption) => {
      if (e.disabled) {
        return
      }
      emit('select', e)
      if (props.hideAfterClick) {
        tooltipRef.value?.hide()
      }
    }
    const visibleChange = (e: boolean) => {
      emit('visible-change', e)
    }
    const options = computed(() => {
      return props.menuOptions.map((item) => {
        return (
          <Fragment key={item.key}>
            {item.divided ? <li role="separator" class="divided-placeholder" /> : ''}
            <li
              class={{
                'sk-dropdown__item': true,
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }}
              id={`dropdown-item-${item.key}`}
              onClick={() => itemClick(item)}
            >
              {item.label}
            </li>
          </Fragment>
        )
      })
    })
    expose({
      show: () => tooltipRef.value?.show(),
      hide: () => tooltipRef.value?.hide()
    })
    return () => (
      <div class="sk-dropdown">
        <Tooltip
          trigger={props.trigger}
          effect={props.effect}
          placement={props.placement}
          popperOptions={props.popperOptions}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          manual={props.manual}
          ref={tooltipRef}
          onVisible-Change={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            content: () => <ul class="sk-dropdown__menu">{options.value}</ul>
          }}
        </Tooltip>
      </div>
    )
  }
})
