<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'

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
      <Tooltip ref="tooltipRef" content="hello tooltip!" manual placement="right">
        <Icon icon="fa-regular fa-heart" :size="size" type="danger" />
      </Tooltip>
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
      <Button round @click="showTooltip">manual Open</Button>
      <Button round @click="hideTooltip">manual Hiden</Button>
      <Tooltip content="hello tooltip" effect="light">
        <Button>effect light</Button>
      </Tooltip>
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
