<template>
  <div class="echarts-style">
    <el-form :model="grid" size="small">
      <el-form-item label="show">
        <el-switch v-model="grid.show" />
      </el-form-item>
      <template v-if="grid.show">
        <el-form-item label="padding">
          <el-input-number v-model="grid.padding" />
        </el-form-item>
        <el-form-item label="left">
          <el-select v-model="grid.left" placeholder="网格左右">
            <el-option label="left" value="left" />
            <el-option label="center" value="center" />
            <el-option label="right" value="right" />
          </el-select>
        </el-form-item>
        <el-form-item label="top">
          <el-select v-model="grid.top" placeholder="网格上下">
            <el-option label="top" value="top" />
            <el-option label="center" value="center" />
            <el-option label="bottom" value="bottom" />
          </el-select>
        </el-form-item>
        <el-form-item label="width">
          <el-slider v-model="grid.width" @input="handleWidthPercentValue" />
        </el-form-item>
        <el-form-item label="height">
          <el-slider v-model="grid.height" @input="handleHeightPercentValue" />
        </el-form-item>
        <el-form-item label="backgroundColor">
          <el-color-picker v-model="grid.backgroundColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderColor">
          <el-color-picker v-model="grid.borderColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderWidth">
          <el-input-number v-model="grid.borderWidth" />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { difference } from '@/utils/commonFun.js'
const grid = reactive({
  show: false,
  padding: 0,
  left: '',
  top: '',
  width: '',
  height: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0
})
const baseGrid = {
  show: false,
  padding: 0,
  left: '',
  top: '',
  width: '',
  height: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0
}
const store = useStore()

const handleWidthPercentValue = (val) => {
  console.log(val)
  if (val === 0) grid.width = ''
  else grid.width = val + '%'
}

const handleHeightPercentValue = (val) => {
  console.log(val)
  if (val === 0) grid.width = ''
  else grid.height = val + '%'
}
watch(
  grid,
  (newValue) => {
    const diffGrid = difference(newValue, baseGrid)
    // if (newValue.show) {
    const data = {
      key: 'grid',
      newValue: diffGrid
    }
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'grid')
    // }
    console.log(store.state.echartsOptions.options)
  },
  { deep: true }
)
</script>

<style></style>
