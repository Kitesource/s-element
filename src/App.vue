<script setup lang="ts">
import { ref, onMounted, reactive, h } from 'vue'
import Button from '@/components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'
import Dropdown from '@/components/Dropdown/Dropdown'
import Dropdown2 from '@/components/Dropdown/Dropdown.vue'
import type { MenuOption } from '@/components/Dropdown/types'
import { createMessage } from '@/components/Message/method'

const collapseValue = ref<string[]>([])
const size = ref<any>('3x')
onMounted(() => {
  setTimeout(() => {
    // collapseValue.value = ['a', 'b']
    // size.value = '2xl'
  }, 2000)
})

const tooltipRef = ref<TooltipInstance | null>(null)
function showTooltip() {
  tooltipRef.value?.show()
}
function hideTooltip() {
  tooltipRef.value?.hide()
}

const dropdownOptions = reactive<MenuOption[]>([
  { key: 1, label: h('b', null, 'item-1-vNode') },
  { key: 2, label: 'item-2', disabled: true },
  { key: 3, label: 'item-3', divided: true },
  { key: 4, label: 'item-4' }
])

function showMessage(type: any) {
  createMessage({
    message: `这个是一条${type}类型的消息`,
    type,
    duration: Math.random() > 0.5 ? 0 : 3000,
    showClose: true
  })
}
</script>

<template>
  <header>
    <h1>s-element</h1>
  </header>

  <main>
    <h2>Button 按钮</h2>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle size="large" icon="check" />
    <Button circle icon="magnifying-glass" />
    <Button circle size="small" icon="magnifying-glass" />
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="magnifying-glass">magnifying-glass</Button><br /><br />

    <h2>Collapse 折叠看板</h2>
    <Collapse v-model="collapseValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </CollapseItem>
    </Collapse>

    <h2>Icon 图标</h2>
    <!-- https://fontawesome.com/search?o=r&m=free -->
    <div class="grid-wrapper">
      <Icon icon="phone" :size="size" type="success" />
      <Icon icon="user" :size="size" type="primary" />
      <Icon icon="fa-brands fa-twitter" :size="size" type="warning" />
      <Icon icon="image" :size="size" type="info" />
      <Icon icon="heart" :size="size" type="danger" />

      <Icon icon="wifi" :size="size" type="success" />
      <Icon icon="fa-brands fa-apple" :size="size" type="primary" />
      <Icon icon="cloud" :size="size" type="warning" />
      <Icon icon="lock" :size="size" type="info" />
      <Icon icon="fa-regular fa-heart" :size="size" type="danger" />
    </div>

    <h2>Tooltip 文字提示</h2>
    <div class="grid-wrapper">
      <Tooltip content="hello tooltip">
        <Button>hover trigger</Button>
      </Tooltip>
      <Tooltip trigger="click">
        <template #content>
          <div>Title</div>
          <p>slot with content</p>
        </template>
        <Button type="primary">click trigger</Button>
      </Tooltip>
      <Tooltip ref="tooltipRef" content="hello tooltip!" manual placement="top">
        <Button round @click="showTooltip">manual Open</Button>
      </Tooltip>

      <Button round @click="hideTooltip">manual Hiden</Button>
      <Tooltip content="hello tooltip" effect="light">
        <Button>effect light</Button>
      </Tooltip>
    </div>

    <h2>Dropdown 下拉菜单</h2>
    <div class="grid-wrapper">
      <Dropdown :menu-options="dropdownOptions">
        <Button>Hover trigger</Button>
      </Dropdown>
      <Dropdown2 :menu-options="dropdownOptions" trigger="click">
        <Button>Click trigger</Button>
      </Dropdown2>
    </div>

    <h2>Message 消息提示</h2>
    <!-- https://fontawesome.com/search?o=r&m=free -->
    <div class="grid-wrapper">
      <Icon icon="phone" :size="size" type="success" @click="showMessage('success')" />
      <Icon icon="user" :size="size" type="primary" @click="showMessage('primary')" />
      <Icon
        icon="fa-brands fa-twitter"
        :size="size"
        type="warning"
        @click="showMessage('warning')"
      />
      <Icon icon="image" :size="size" type="info" @click="showMessage('info')" />
      <Icon icon="heart" :size="size" type="danger" @click="showMessage('danger')" />
    </div>
  </main>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
main {
  padding: 24px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.grid-wrapper {
  width: 40%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
</style>
