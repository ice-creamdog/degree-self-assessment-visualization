<template>
  <div class="item-style-setting">
    <el-form v-model="itemStyle" size="small">
      <el-form-item label="color">
        <el-color-picker v-model="itemStyle.color" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="borderColor">
        <el-color-picker v-model="itemStyle.borderColor" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="borderWidth">
        <el-input-number v-model="itemStyle.borderWidth" />
      </el-form-item>
      <el-form-item label="borderType">
        <el-select v-model="itemStyle.borderType" placeholder="字体样式">
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
      <el-form-item label="opacity">
        <el-input-number v-model="itemStyle.opacity" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue-demi'

const itemStyle = reactive({
  color: '',
  borderColor: '',
  borderWidth: '',
  borderType: 'solid',
  opacity: 0
})
</script>

<style></style>
