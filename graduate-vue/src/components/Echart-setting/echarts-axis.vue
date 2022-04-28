<template>
  <div class="echarts-axis">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="xAxis" name="xAxis"><axis @getAxisData="getAxisData"></axis></el-tab-pane>
      <el-tab-pane label="yAxis" name="yAxis"><axis @getAxisData="getAxisData"></axis></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Axis from '../Axis/Axis.vue'
import { difference } from '@/utils/commonFun.js'

const activeName = ref('xAxis')
let xAxisValue = reactive({})
let yAxisValue = reactive({})
const store = useStore()

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const getAxisData = (e) => {
  if (activeName.value === 'xAxis') {
    xAxisValue = e
    // if (xAxisValue.show) {
    const data = {
      key: 'xAxis',
      newValue: xAxisValue
    }
    store.commit('echartsOptions/setOptions', data)
    console.log(store.state.echartsOptions.options)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'xAxis')
    // }
  } else {
    yAxisValue = e
    // if (yAxisValue.show) {
    const data = {
      key: 'yAxis',
      newValue: yAxisValue
    }

    store.commit('echartsOptions/setOptions', data)
    console.log(store.state.echartsOptions.options)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'yAxis')
    // }
  }
}
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
