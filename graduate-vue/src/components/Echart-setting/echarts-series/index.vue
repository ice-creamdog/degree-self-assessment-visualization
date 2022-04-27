<template>
  <div class="series-setting">
    <el-form inline="true" v-model="series" size="small">
      <!-- 每个item -->
      <el-form-item>
        <el-button @click="addSeriesItem">添加数据块</el-button>
      </el-form-item>
      <div class="series-module" v-for="(item, index) in series" :key="index">
        <el-form-item label="type">
          <el-select v-model="item.type" placeholder="字体样式">
            <el-option label="bar" value="bar" />
            <el-option label="line" value="line" />
            <el-option label="pie" value="pie" />
          </el-select>
          <el-form-item label="name">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
          <label-style :add="add" :index="index" :isModules="true" @getLabelData="getLabelData" />
          <item-style :index="index" :isModules="true" @getItemStyle="getItemStyle" />
        </el-form-item>
        <div v-if="item.type === 'bar'">
          <bar-type :index="index" @getBarTypeData="getBarTypeData" />
        </div>
        <div v-else-if="item.type === 'pie'">
          <pie-type :index="index" @getPieTypeData="getPieTypeData" />
        </div>
        <div v-else>
          <line-type :index="index" @getLineTypeData="getLineTypeData" />
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import ItemStyle from '../../ItemStyle/index.vue'
import BarType from './barType.vue'
import PieType from './pieType.vue'
import LineType from './lineType.vue'
import labelStyle from '../../label/label.vue'
import { useStore } from 'vuex'

const series = reactive([
  {
    name: '',
    type: 'bar',
    label: {},
    data: [],
    itemStyle: {}
  }
])
const baseSeriesItem = reactive({
  name: '',
  type: 'bar',
  label: {},
  data: [],
  itemStyle: {}
})

const store = useStore()

const getBarTypeData = (e) => {
  console.log(e)
  const { index, newValue } = e
  Object.assign(series[index.value], newValue)
}
const getPieTypeData = (e) => {
  const { index, newValue } = e
  Object.assign(series[index.value], newValue)
}
const getLineTypeData = (e) => {
  const { index, newValue } = e
  Object.assign(series[index.value], newValue)
}
const getLabelData = (e) => {
  console.log(e)
  const { index, newValue } = e
  const labelData = { label: newValue }
  Object.assign(series[index.value], labelData)
}
const getItemStyle = (e) => {
  console.log(e)
  const { index, newValue } = e
  const itemStyleData = { itemStyle: newValue }
  itemStyleData && Object.assign(series[index.value], itemStyleData)
}

const addSeriesItem = () => {
  series.push(baseSeriesItem)
}
watch(series, (newValue) => {
  console.log(newValue)
})
</script>

<style></style>
