<template>
  <div class="echarts-size">
    <el-form :model="legend" inline="true" size="small">
      <el-form-item label="show">
        <el-switch v-model="legend.show" />
      </el-form-item>
      <el-form v-model="legend.itemStyle" size="small">
        <el-form-item label="color">
          <el-color-picker v-model="legend.itemStyle.color" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderColor">
          <el-color-picker v-model="legend.itemStyle.borderColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderWidth">
          <el-input-number v-model="legend.itemStyle.borderWidth" />
        </el-form-item>
        <el-form-item label="borderType">
          <el-select v-model="legend.itemStyle.borderType" placeholder="字体样式">
            <el-option label="solid" value="solid" />
            <el-option label="dashed" value="dashed" />
            <el-option label="dotted" value="dotted" />
          </el-select>
        </el-form-item>
        <el-form-item label="opacity">
          <el-input-number v-model="legend.itemStyle.opacity" />
        </el-form-item>
      </el-form>
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
          <el-input-number v-model="legend.textStyle.fontSize" />
        </el-form-item>
        <el-form-item label="width">
          <el-input-number v-model="legend.textStyle.width" />
        </el-form-item>
        <el-form-item label="height">
          <el-input-number v-model="legend.textStyle.height" />
        </el-form-item>
      </el-form>
      <el-form-item label="padding">
        <el-input-number v-model="legend.padding" />
      </el-form-item>
      <el-form-item label="left">
        <el-input v-model="legend.left" />
      </el-form-item>
      <el-form-item label="top">
        <el-input v-model="legend.top" />
      </el-form-item>
      <el-form-item label="width">
        <el-input v-model="legend.width" />
      </el-form-item>
      <el-form-item label="height">
        <el-input v-model="legend.height" />
      </el-form-item>
      <el-form-item label="itemHeight">
        <el-input-number v-model="legend.itemHeight" />
      </el-form-item>
      <el-form-item label="itemWidth">
        <el-input-number v-model="legend.itemWidth" />
      </el-form-item>
      <el-form-item label="borderWidth">
        <el-input-number v-model="legend.borderWidth" />
      </el-form-item>
      <el-form-item label="borderRadius">
        <el-input-number v-model="legend.borderRadius" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const legend = reactive({
  show: true,
  width: 0,
  height: 0,
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
    opacity: 0
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
</script>

<style></style>
