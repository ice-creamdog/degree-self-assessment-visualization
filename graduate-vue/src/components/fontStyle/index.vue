<template>
  <div class="text-basic-style">
    <el-collapse accordion>
      <el-collapse-item title="textStyle">
        <el-form size="small" class="text-basic-style" v-model="textStyle">
          <el-form-item label="color">
            <el-color-picker v-model="textBasicStyle.color" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="fontStyle">
            <el-select v-model="textBasicStyle.fontStyle" placeholder="字体样式">
              <el-option label="normal" value="normal" />
              <el-option label="italic" value="italic" />
              <el-option label="oblique" value="oblique" />
            </el-select>
          </el-form-item>
          <el-form-item label="fontWeight">
            <el-select v-model="textBasicStyle.fontWeight" placeholder="字体粗细">
              <el-option label="normal" value="normal" />
              <el-option label="bold" value="bold" />
              <el-option label="bolder" value="bolder" />
              <el-option label="lighter" value="lighter" />
            </el-select>
          </el-form-item>
          <el-form-item label="fontSize">
            <el-input-number v-model="textBasicStyle.fontSize" />
          </el-form-item>
          <el-form-item label="align">
            <el-select v-model="textBasicStyle.align" placeholder="字体粗细">
              <el-option label="left" value="left" />
              <el-option label="center" value="center" />
              <el-option label="right" value="right" />
            </el-select>
          </el-form-item>
          <el-form-item label="verticalAlign">
            <el-select v-model="textBasicStyle.verticalAlign" placeholder="字体粗细">
              <el-option label="top" value="top" />
              <el-option label="middle" value="middle" />
              <el-option label="bottom" value="bottom" />
            </el-select>
          </el-form-item>
          <el-form-item label="backgroundColor">
            <el-color-picker v-model="textBasicStyle.backgroundColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="borderColor">
            <el-color-picker v-model="textBasicStyle.borderColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="borderWidth">
            <el-input-number v-model="textBasicStyle.borderWidth" />
          </el-form-item>
          <el-form-item label="borderType">
            <el-select v-model="textBasicStyle.borderType" placeholder="字体样式">
              <el-option label="solid" value="solid" />
              <el-option label="dashed" value="dashed" />
              <el-option label="dotted" value="dotted" />
            </el-select>
          </el-form-item>
          <el-form-item label="borderRadius">
            <el-input-number v-model="textBasicStyle.borderRadius" />
          </el-form-item>
          <el-form-item label="width">
            <el-slider v-model="textBasicStyle.width" @input="handleWidthPercentValue" />
          </el-form-item>
          <el-form-item label="height">
            <el-slider v-model="textBasicStyle.height" @input="handleHeightPercentValue" />
          </el-form-item>
          <el-form-item label="opacity">
            <el-input-number v-model="textBasicStyle.opacity" />
          </el-form-item>
          <el-form-item label="textBorderColor">
            <el-color-picker v-model="textBasicStyle.textBorderColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="textBorderWidth">
            <el-input-number v-model="textBasicStyle.textBorderWidth" />
          </el-form-item>
          <el-form-item label="textBorderType">
            <el-select v-model="textBasicStyle.textBorderType" placeholder="字体样式">
              <el-option label="solid" value="solid" />
              <el-option label="dashed" value="dashed" />
              <el-option label="dotted" value="dotted" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { reactive, defineEmits, watch } from 'vue'
import { difference } from '@/utils/commonFun.js'
const textBasicStyle = reactive({
  color: null,
  fontStyle: '',
  fontWeight: '',
  fontSize: 0,
  align: '',
  verticalAlign: '',
  backgroundColor: null,
  borderColor: null,
  borderWidth: 0,
  borderRadius: 0,
  borderType: '',
  width: 0,
  height: 0,
  opacity: 1,
  textBorderColor: null,
  textBorderType: '',
  textBorderWidth: 0
})
const baseTextStyle = {
  color: null,
  fontStyle: '',
  fontWeight: '',
  fontSize: 0,
  align: '',
  verticalAlign: '',
  backgroundColor: null,
  borderColor: null,
  borderWidth: 0,
  borderRadius: 0,
  borderType: '',
  width: 0,
  height: 0,
  opacity: 1,
  textBorderColor: null,
  textBorderType: '',
  textBorderWidth: 0
}

const emit = defineEmits('getTextStyle')

const handleWidthPercentValue = (val) => {
  if (val === 0) textBasicStyle.width = ''
  else textBasicStyle.width = val + '%'
}

const handleHeightPercentValue = (val) => {
  if (val === 0) textBasicStyle.height = ''
  else textBasicStyle.height = val + '%'
}

watch(
  textBasicStyle,
  (newValue) => {
    const diffTextStyle = difference(newValue, baseTextStyle)
    console.log(diffTextStyle)
    emit('getTextStyle', diffTextStyle)
  },
  { deep: true }
)
</script>

<style></style>
