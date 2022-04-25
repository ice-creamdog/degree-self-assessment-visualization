<template>
  <div class="echarts-style">
    <el-form :model="grid" :inline="true" size="small">
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="grid.show" />
      </el-form-item>
      <el-form-item label="padding">
        <el-input-number v-model="grid.padding" />
      </el-form-item>
      <el-form-item label="left">
        <el-input v-model="grid.left" />
      </el-form-item>
      <el-form-item label="top">
        <el-input v-model="grid.top" />
      </el-form-item>
      <el-form-item label="width">
        <el-input-number v-model="grid.width" />
      </el-form-item>
      <el-form-item label="height">
        <el-input-number v-model="grid.height" />
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
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
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
</script>

<style></style>
