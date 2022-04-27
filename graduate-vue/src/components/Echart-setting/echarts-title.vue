<template>
  <div class="echarts-title">
    <el-form :model="title" :inline="true" size="small">
      <el-form-item label="show">
        <el-switch v-model="title.show" />
      </el-form-item>
      <template v-if="title.show">
        <el-form-item label="text">
          <el-input v-model="title.text" />
        </el-form-item>
        <el-collapse accordion>
          <el-collapse-item title="textStyle">
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
            </el-form>
          </el-collapse-item>
        </el-collapse>

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
          <el-select v-model="title.left" placeholder="标题左右">
            <el-option label="left" value="left" />
            <el-option label="center" value="center" />
            <el-option label="right" value="right" />
          </el-select>
        </el-form-item>
        <el-form-item label="top">
          <el-select v-model="title.top" placeholder="标题上下">
            <el-option label="top" value="top" />
            <el-option label="center" value="center" />
            <el-option label="bottom" value="bottom" />
          </el-select>
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
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { difference } from '@/utils/commonFun.js'
const title = reactive({
  show: false,
  text: '',
  textStyle: {
    color: '',
    fontStyle: '',
    fontWeight: '',
    fontFamily: '',
    fontSize: 18
  },
  textAlign: '',
  padding: 0,
  left: '',
  top: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  borderRadius: 0
})
const baseTitle = {
  show: false,
  text: '',
  textStyle: {
    color: '',
    fontStyle: '',
    fontWeight: '',
    fontFamily: '',
    fontSize: 18
  },
  textAlign: '',
  padding: 0,
  left: '',
  top: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  borderRadius: 0
}
const store = useStore()
watch(
  title,
  (newValue) => {
    // if (newValue.show) {
    const diffTitle = difference(newValue, baseTitle)
    const data = {
      key: 'title',
      newValue: diffTitle
    }
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'title')
    // }
    console.log(store.state.echartsOptions.options)
  },
  {
    deep: true
  }
)
</script>

<style></style>
