<template>
  <div class="echarts-container">
    <div class="container" ref="container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs, defineProps, watch } from 'vue'
import * as echarts from 'echarts'

const container = ref(null)

const chart = ref(null)
const props = defineProps({
  options: {
    required: true,
    type: Object
    // default: {}
  }
})
const { options } = toRefs(props)
watch(
  options.value,
  (newOptions) => {
    try {
      chart.value.setOption(newOptions, true)
    } catch (error) {
      console.log(error, 11)
    }
  },
  {
    deep: true
    // immediate: true
  }
)

onMounted(() => {
  chart.value = echarts.init(container.value, 'dark')
  chart.value.setOption(props.options, true)
  console.log(props.options)
})
</script>

<style lang="scss" scoped>
.echarts-container {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
