<template>
  <div class="echarts-title">
    <el-form :model="title" :inline="true" size="small">
      <el-form-item label="show">
        <el-switch v-model="title.show" />
      </el-form-item>
      <el-form-item label="text">
        <el-input v-model="title.text" />
      </el-form-item>
      <el-form v-model="title.textStyle" size="small">
        <el-form-item label="color">
          <el-color-picker v-model="title.textStyle.color" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="fontStyle">
          <el-select v-model="title.textStyle.fontStyle" placeholder="字体样式">
            <el-option label="normal" value="normal" />
            <el-option label="italic" value="italic" />
            <el-option label="oblique" value="oblique" />
          </el-select>
        </el-form-item>
        <el-form-item label="fontWeight">
          <el-select v-model="title.textStyle.fontWeight" placeholder="字体粗细">
            <el-option label="normal" value="normal" />
            <el-option label="bold" value="bold" />
            <el-option label="bolder" value="bolder" />
            <el-option label="lighter" value="lighter" />
          </el-select>
        </el-form-item>
        <el-form-item label="fontSize">
          <el-input-number v-model="title.textStyle.fontSize" />
        </el-form-item>
        <el-form-item label="width">
          <el-input-number v-model="title.textStyle.width" />
        </el-form-item>
        <el-form-item label="height">
          <el-input-number v-model="title.textStyle.height" />
        </el-form-item>
      </el-form>
      <el-form-item label="textAlign">
        <el-select v-model="title.textAlign" placeholder="字体对齐">
          <el-option label="auto" value="auto" />
          <el-option label="left" value="left" />
          <el-option label="right" value="right" />
          <el-option label="center" value="center" />
        </el-select>
      </el-form-item>
      <el-form-item label="padding">
        <el-input-number v-model="title.padding" />
      </el-form-item>
      <el-form-item label="left">
        <el-input v-model="title.left" />
      </el-form-item>
      <el-form-item label="top">
        <el-input v-model="title.top" />
      </el-form-item>
      <el-form-item label="right">
        <el-input v-model="title.right" />
      </el-form-item>
      <el-form-item label="bottom">
        <el-input v-model="title.bottom" />
      </el-form-item>
      <el-form-item label="backgroundColor">
        <el-color-picker v-model="title.backgroundColor" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="borderColor">
        <el-color-picker v-model="title.borderColor" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="borderWidth">
        <el-input-number v-model="title.borderWidth" />
      </el-form-item>
      <el-form-item label="borderRadius">
        <el-input-number v-model="title.borderRadius" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    const title = reactive({
      show: false,
      text: '',
      textStyle: {
        color: '',
        fontStyle: '',
        fontWeight: '',
        fontFamily: '',
        fontSize: 18,
        width: 100,
        height: 50
      },
      textAlign: '',
      padding: 0,
      left: '',
      right: '',
      bottom: '',
      top: '',
      backgroundColor: '',
      borderColor: '',
      borderWidth: 0,
      borderRadius: 0
    })
    const ruleForm = reactive({
      delivery: false
    })
    return {
      title,
      ruleForm
    }
  }
}
</script>

<style></style>
