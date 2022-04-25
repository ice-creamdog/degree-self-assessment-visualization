<template>
  <div class="echarts-axis">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="xAxis" name="xAxis"><axis></axis></el-tab-pane>
      <el-tab-pane label="yAxis" name="yAxis"><axis></axis></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Axis from '../Axis/Axis.vue'

const activeName = ref('xAxis')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
