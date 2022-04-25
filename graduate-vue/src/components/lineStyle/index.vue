<template>
  <div class="line-style-setting">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <div>
          <el-form v-model="lineStyle" size="small">
            <el-form-item label="color">
              <el-color-picker v-model="lineStyle.color" show-alpha></el-color-picker>
            </el-form-item>
            <el-form-item label="width">
              <el-input-number :step="1" v-model="lineStyle.width" />
            </el-form-item>
            <el-form-item label="borderColor">
              <el-color-picker v-model="lineStyle.borderColor" show-alpha></el-color-picker>
            </el-form-item>
            <el-form-item label="type">
              <el-select v-model="lineStyle.type" placeholder="字体样式">
                <el-option label="solid" value="solid" />
                <el-option label="dashed" value="dashed" />
                <el-option label="dotted" value="dotted" />
              </el-select>
            </el-form-item>
            <el-form-item label="cap">
              <el-select v-model="lineStyle.cap" placeholder="字体样式">
                <el-option label="butt" value="butt" />
                <el-option label="round" value="round" />
                <el-option label="square" value="square" />
              </el-select>
            </el-form-item>
            <el-form-item label="join">
              <el-select v-model="lineStyle.join" placeholder="字体样式">
                <el-option label="bevel" value="bevel" />
                <el-option label="round" value="round" />
                <el-option label="miter" value="miter" />
              </el-select>
            </el-form-item>
            <el-form-item label="shadowBlur">
              <el-input-number :step="1" v-model="lineStyle.shadowBlur" />
            </el-form-item>
            <el-form-item label="shadowColor">
              <el-color-picker v-model="lineStyle.shadowColor" show-alpha></el-color-picker>
            </el-form-item>
            <el-form-item label="shadowXOffset">
              <el-input-number :step="1" v-model="lineStyle.shadowXOffset" />
            </el-form-item>
            <el-form-item label="shadowYOffset">
              <el-input-number :step="1" v-model="lineStyle.shadowYOffset" />
            </el-form-item>
            <el-form-item label="opacity">
              <el-input-number v-model="lineStyle.opacity" />
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const lineStyle = reactive({
  color: '',
  borderColor: '',
  width: '',
  type: 'solid',
  opacity: 0,
  cap: 'butt',
  join: 'bevel',
  shadowBlur: 0,
  shadowColor: '',
  shadowXOffset: 0,
  shadowYOffset: 0
})
</script>

<style></style>
