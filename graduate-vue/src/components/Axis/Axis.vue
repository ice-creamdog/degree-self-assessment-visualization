<template>
  <div class="Axis-setting">
    <el-form :model="Axis" inline="true" size="small" v-if="seriesType">
      <el-form-item label="show">
        <el-switch v-model="Axis.show" />
      </el-form-item>
      <el-form-item label="position">
        <el-select v-model="Axis.position" placeholder="坐标轴位置">
          <el-option label="top" value="top" />
          <el-option label="bottom" value="bottom" />
        </el-select>
      </el-form-item>
      <el-form-item label="type">
        <el-select v-model="Axis.type" placeholder="坐标轴类型">
          <el-option label="category" value="category" />
          <el-option label="value" value="value" />
          <el-option label="time" value="time" />
          <el-option label="log" value="log" />
        </el-select>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="Axis.name" />
      </el-form-item>
      <el-form-item label="nameLocation">
        <el-select v-model="Axis.nameLocation" placeholder="坐标轴类型">
          <el-option label="start" value="start" />
          <el-option label="middle" value="middle" />
          <el-option label="end" value="end" />
        </el-select>
      </el-form-item>
      <el-form-item label="nameTextStyle">
        <text-basic-style />
      </el-form-item>
      <el-form-item label="nameGap">
        <el-input-number v-model="Axis.nameGap" />
      </el-form-item>
      <el-form-item label="inverse">
        <el-switch v-model="Axis.inverse" />
      </el-form-item>
      <el-form-item label="axisLine">
        <el-form v-model="Axis.axisLine" size="small">
          <el-form-item label="show">
            <el-switch v-model="Axis.axisLine.show" />
          </el-form-item>
          <el-form-item label="symbol">
            <el-select v-model="Axis.axisLine.symbol" placeholder="字体粗细">
              <el-option label="none" value="none" />
              <el-option label="circle" value="circle" />
              <el-option label="pin" value="pin" />
              <el-option label="roundRect" value="roundRect" />
              <el-option label="arrow" value="arrow" />
              <el-option label="triangle" value="triangle" />
            </el-select>
          </el-form-item>
          <el-form-item label="symbolSize">
            <el-input-number v-model="Axis.axisLine.symbolSize[0]" />
            <el-input-number v-model="Axis.axisLine.symbolSize[1]" />
          </el-form-item>
          <el-form-item label="symbolOffset">
            <el-input-number v-model="Axis.axisLine.symbolOffset[0]" />
            <el-input-number v-model="Axis.axisLine.symbolOffset[1]" />
          </el-form-item>
          <el-form-item>
            <line-style />
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="data">
        <el-form>
          <el-form-item label="data">
            <el-input
              v-model="Axis.data"
              placeholder="请复制数据粘贴"
              @change="handleDataToArray"
            ></el-input>
          </el-form-item>
          <el-form-item label="textStyle">
            <text-basic-style />
          </el-form-item>
        </el-form>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import LineStyle from '../lineStyle/index.vue'
import TextBasicStyle from '../fontStyle/index.vue'
import { reactive, watch, defineEmits, computed, ref } from 'vue-demi'
import { difference } from '@/utils/commonFun.js'
import { useStore } from 'vuex'
const Axis = reactive({
  show: false,
  position: '',
  type: '',
  name: '',
  nameLocation: '',
  nameTextStyle: {},
  nameGap: 0,
  inverse: false,
  axisLine: { symbol: '', symbolSize: [0, 0], symbolOffset: [0, 0], lineStyle: {} },

  data: ''
})

const baseAxis = {
  show: false,
  position: '',
  type: '',
  name: '',
  nameLocation: '',
  nameTextStyle: {},
  nameGap: 0,
  inverse: false,
  axisLine: { symbol: '', symbolSize: [0, 0], symbolOffset: [0, 0], lineStyle: {} },

  data: ''
}
const emit = defineEmits(['getAxisData'])
const store = useStore()

const handleDataToArray = (val) => {
  if (val.length) {
    Axis.data = val.split(',')
  } else Axis.data = []
}

let canUseAxis = ref(false)

const seriesType = computed(() => {
  const options = store.getters['echartsOptions/getOptions']
  for (let i = 0, len = options.length; i < len; i++) {
    if (
      options[i].type !== undefined &&
      (options[i].type === 'line' || options[i].type === 'bar')
    ) {
      console.log(1)
      canUseAxis.value = true
      break
    }
    console.log(2)
  }
  return canUseAxis
})
watch(
  Axis,
  (newValue) => {
    const diffAxis = difference(newValue, baseAxis)
    emit('getAxisData', diffAxis)
  },
  { deep: true }
)
</script>

<style></style>
