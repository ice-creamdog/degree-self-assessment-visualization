<template>
  <div class="echarts-size">
    <el-form :model="legend" size="small">
      <el-form-item label="show">
        <el-switch v-model="legend.show" />
      </el-form-item>
      <template v-if="legend.show">
        <el-collapse>
          <el-collapse-item title="itemStyle">
            <el-form v-model="legend.itemStyle" size="small">
              <el-form-item label="color">
                <el-color-picker v-model="legend.itemStyle.color" show-alpha></el-color-picker>
              </el-form-item>
              <el-form-item label="borderColor">
                <el-color-picker
                  v-model="legend.itemStyle.borderColor"
                  show-alpha
                ></el-color-picker>
              </el-form-item>
              <el-form-item label="borderWidth">
                <el-input-number :step="1" v-model="legend.itemStyle.borderWidth" />
              </el-form-item>
              <el-form-item label="borderType">
                <el-select v-model="legend.itemStyle.borderType">
                  <el-option label="solid" value="solid" />
                  <el-option label="dashed" value="dashed" />
                  <el-option label="dotted" value="dotted" />
                </el-select>
              </el-form-item>
              <el-form-item label="opacity">
                <el-input-number :step="1" v-model="legend.itemStyle.opacity" />
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item title="textStyle">
            <el-form v-model="legend.textStyle" size="small">
              <el-form-item label="color">
                <el-color-picker v-model="legend.textStyle.color" show-alpha></el-color-picker>
              </el-form-item>
              <el-form-item label="fontStyle">
                <el-select v-model="legend.textStyle.fontStyle" placeholder="字体样式">
                  <el-option label="normal" value="normal" />
                  <el-option label="italic" value="italic" />
                  <el-option label="oblique" value="oblique" />
                </el-select>
              </el-form-item>
              <el-form-item label="fontWeight">
                <el-select v-model="legend.textStyle.fontWeight" placeholder="字体粗细">
                  <el-option label="normal" value="normal" />
                  <el-option label="bold" value="bold" />
                  <el-option label="bolder" value="bolder" />
                  <el-option label="lighter" value="lighter" />
                </el-select>
              </el-form-item>
              <el-form-item label="fontSize">
                <el-input-number :step="1" v-model="legend.textStyle.fontSize" />
              </el-form-item>
              <el-form-item label="width">
                <el-input-number :step="1" v-model="legend.textStyle.width" />
              </el-form-item>
              <el-form-item label="height">
                <el-input-number :step="1" v-model="legend.textStyle.height" />
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse>

        <el-form-item label="padding">
          <el-input-number :step="1" v-model="legend.padding" />
        </el-form-item>
        <el-form-item label="left">
          <el-select v-model="legend.left" placeholder="图例左右">
            <el-option label="left" value="left" />
            <el-option label="center" value="center" />
            <el-option label="right" value="right" />
          </el-select>
        </el-form-item>
        <el-form-item label="top">
          <el-select v-model="legend.left" placeholder="图例上下">
            <el-option label="left" value="left" />
            <el-option label="center" value="center" />
            <el-option label="right" value="right" />
          </el-select>
        </el-form-item>
        <el-form-item label="width">
          <el-slider v-model="legend.width" @input="handleWidthPercentValue" />
        </el-form-item>
        <el-form-item label="height">
          <el-slider v-model="legend.height" @input="handleHeightPercentValue" />
        </el-form-item>
        <el-form-item label="itemHeight">
          <el-input-number :step="1" v-model="legend.itemHeight" />
        </el-form-item>
        <el-form-item label="itemWidth">
          <el-input-number :step="1" v-model="legend.itemWidth" />
        </el-form-item>
        <el-form-item label="borderWidth">
          <el-input-number :step="1" v-model="legend.borderWidth" />
        </el-form-item>
        <el-form-item label="borderRadius">
          <el-input-number :step="1" v-model="legend.borderRadius" />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { difference } from '@/utils/commonFun.js'
const store = useStore()
const legend = reactive({
  show: true,
  width: '',
  height: '',
  top: '',
  left: '',
  orieht: 'horizontal',
  align: '',
  padding: 5,
  itemWidth: 25,
  itemHeight: 14,
  borderWidth: 1,
  borderRadius: 0,
  itemStyle: {
    color: '',
    borderColor: '',
    borderWidth: '',
    borderType: 'solid',
    opacity: 1
  },
  textStyle: {
    color: '',
    fontStyle: '',
    fontWeight: '',
    fontFamily: '',
    fontSize: 18,
    width: 100,
    height: 50
  }
})
const baselLegend = {
  show: '',
  width: '',
  height: '',
  top: '',
  left: '',
  orieht: 'horizontal',
  align: '',
  padding: 5,
  itemWidth: 25,
  itemHeight: 14,
  borderWidth: 1,
  borderRadius: 0,
  itemStyle: {
    color: '',
    borderColor: '',
    borderWidth: '',
    borderType: 'solid',
    opacity: 1
  },
  textStyle: {
    color: '',
    fontStyle: '',
    fontWeight: '',
    fontFamily: '',
    fontSize: 18,
    width: 100,
    height: 50
  }
}

const handleWidthPercentValue = (val) => {
  console.log(val)
  if (val === 0) legend.width = ''
  else legend.width = val + '%'
}

const handleHeightPercentValue = (val) => {
  console.log(val)
  if (val === 0) legend.width = ''
  else legend.height = val + '%'
}

watch(
  legend,
  (newValue) => {
    const diffValue = difference(newValue, baselLegend)
    console.log(diffValue)
    // if (newValue.show) {
    const data = {
      key: 'legend',
      newValue: diffValue
    }
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'legend')
    // }
    console.log(store.state.echartsOptions.options)
  },
  { deep: true }
)
</script>

<style lang="scss" scoped></style>
