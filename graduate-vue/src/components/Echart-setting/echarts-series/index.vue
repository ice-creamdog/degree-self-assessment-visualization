<template>
  <div class="series-setting">
    <el-form inline="true" v-model="series" size="small">
      <!-- 每个item -->
      <el-form-item>
        <el-button @click="addSeriesItem">添加数据块</el-button>
      </el-form-item>
      <el-collapse accordion>
        <el-collapse-item v-for="(item, index) in series" :key="index" :title="'数据项' + index">
          <div class="series-module">
            <el-button @click="handleDeleteSeriesItem(index)">删除该数据块</el-button>
            <el-form-item label="type">
              <el-select
                @change="handleSeriesType"
                v-model="series[index].type"
                placeholder="字体样式"
              >
                <el-option label="bar" value="bar" />
                <el-option label="line" value="line" />
                <el-option label="pie" value="pie" />
              </el-select>
              <el-form-item label="name">
                <el-input v-model="series[index].name"></el-input>
              </el-form-item>
              <label-style
                :add="add"
                :index="index"
                :isModules="true"
                @getLabelData="getLabelData"
              />
              <item-style :index="index" :isModules="true" @getItemStyle="getItemStyle" />
            </el-form-item>
            <div v-if="item.type === 'bar'">
              <bar-type :index="index" @getBarTypeData="getBarTypeData" />
            </div>
            <div v-else-if="item.type === 'pie'">
              <pie-type :index="index" @getPieTypeData="getPieTypeData" />
            </div>
            <div v-else-if="item.type === 'line'">
              <line-type :index="index" @getLineTypeData="getLineTypeData" />
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
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
import { difference } from '@/utils/commonFun.js'

const series = reactive([
  {
    name: '',
    type: '',
    label: {},
    data: [],
    itemStyle: {}
  }
])
const baseSeriesItem = reactive({
  name: '',
  type: '',
  label: {},
  data: [],
  itemStyle: {}
})

const store = useStore()

const getBarTypeData = (e) => {
  console.log(e)
  const { index, newValue } = e
  const keys = Object.keys(newValue)
  for (const key of keys) {
    series[index.value][key] = newValue[key]
  }
}
const getPieTypeData = (e) => {
  console.log(e)
  const { index, newValue } = e
  const keys = Object.keys(newValue)
  for (const key of keys) {
    series[index.value][key] = newValue[key]
  }
  console.log(series[index.value])
}
const getLineTypeData = (e) => {
  console.log(e)
  const { index, newValue } = e
  const keys = Object.keys(newValue)
  console.log(keys)
  for (const key of keys) {
    series[index.value][key] = newValue[key]
  }
  console.log(series)
}
const getLabelData = (e) => {
  console.log(e)
  const { index, newValue } = e
  series[index.value].label = newValue
}
const getItemStyle = (e) => {
  console.log(e)
  const { index, newValue } = e
  series[index.value].itemStyle = newValue
}

const handleSeriesType = (e) => {
  if (e !== 'pie') {
    const data = {
      type: 'category',
      data: []
    }
    const xAxisData = {
      key: 'xAxis',
      newValue: data
    }
    const yAxisData = {
      key: 'yAxis',
      newValue: data
    }
    store.commit('echartsOptions/setOptions', xAxisData)
    store.commit('echartsOptions/setOptions', yAxisData)
  }
}

const addSeriesItem = () => {
  series.push({
    name: '',
    type: '',
    label: {},
    data: [],
    itemStyle: {}
  })
}
const handleDeleteSeriesItem = (index) => {
  if (index > 0) series.splice(index, 1)
}
watch(
  series,
  (newValue, oldValue) => {
    console.log(newValue, oldValue)
    const diffSeries = []
    for (let i = 0, len = newValue.length; i < len; i++) {
      console.log(newValue[i], i)
      const diff = difference(newValue[i], baseSeriesItem)
      console.log(diff)
      diffSeries.push(diff)
    }
    const data = {
      key: 'series',
      newValue: diffSeries
    }
    console.log(diffSeries)
    // if (!diffSeries) {
    store.commit('echartsOptions/setOptions', data)
    console.log(store.state.echartsOptions.options)
    // } else {
    // store.commit('echartsOptions/deleteProp', 'series')
    // }

    // } else {

    // }
  },
  { deep: true }
)
</script>

<style></style>
