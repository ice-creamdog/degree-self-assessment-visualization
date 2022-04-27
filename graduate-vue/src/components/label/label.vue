<template>
  <div class="text-basic-style">
    <el-collapse accordion>
      <el-collapse-item title="label">
        <el-form inline="true" class="text-basic-style" v-model="label">
          <el-form-item label="show">
            <el-switch v-model="label.show"></el-switch>
          </el-form-item>
          <el-form-item label="position">
            <el-select v-model="label.position" placeholder="标签位置">
              <el-option label="top" value="top" />
              <el-option label="bottom" value="bottom" />
              <el-option label="right" value="right" />
              <el-option label="left" value="left" />
              <el-option label="outside" value="outside" />
              <el-option label="inside" value="inside" />
            </el-select>
          </el-form-item>
          <el-form-item label="color">
            <el-color-picker v-model="label.color" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="fontStyle">
            <el-select v-model="label.fontStyle" placeholder="字体样式">
              <el-option label="normal" value="normal" />
              <el-option label="italic" value="italic" />
              <el-option label="oblique" value="oblique" />
            </el-select>
          </el-form-item>
          <el-form-item label="fontWeight">
            <el-select v-model="label.fontWeight" placeholder="字体粗细">
              <el-option label="normal" value="normal" />
              <el-option label="bold" value="bold" />
              <el-option label="bolder" value="bolder" />
              <el-option label="lighter" value="lighter" />
            </el-select>
          </el-form-item>
          <el-form-item label="fontSize">
            <el-input-number v-model="label.fontSize" />
          </el-form-item>
          <el-form-item label="align">
            <el-select v-model="label.align" placeholder="字体粗细">
              <el-option label="left" value="left" />
              <el-option label="center" value="center" />
              <el-option label="right" value="right" />
            </el-select>
          </el-form-item>
          <el-form-item label="verticalAlign">
            <el-select v-model="label.verticalAlign" placeholder="字体粗细">
              <el-option label="top" value="top" />
              <el-option label="middle" value="middle" />
              <el-option label="bottom" value="bottom" />
            </el-select>
          </el-form-item>
          <el-form-item label="backgroundColor">
            <el-color-picker v-model="label.backgroundColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="borderColor">
            <el-color-picker v-model="label.borderColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="borderWidth">
            <el-input-number v-model="label.borderWidth" />
          </el-form-item>
          <el-form-item label="borderType">
            <el-select v-model="label.borderType" placeholder="字体样式">
              <el-option label="solid" value="solid" />
              <el-option label="dashed" value="dashed" />
              <el-option label="dotted" value="dotted" />
            </el-select>
          </el-form-item>
          <el-form-item label="borderRadius">
            <el-input-number v-model="label.borderRadius" />
          </el-form-item>
          <el-form-item label="padding">
            <el-input-number :step="1" v-model="label.padding"></el-input-number>
          </el-form-item>
          <el-form-item label="width">
            <el-input-number v-model="label.width" />
          </el-form-item>
          <el-form-item label="height">
            <el-input-number v-model="label.height" />
          </el-form-item>
          <el-form-item label="opacity">
            <el-input-number v-model="label.opacity" />
          </el-form-item>
          <el-form-item label="textBorderColor">
            <el-color-picker v-model="label.textBorderColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="textBorderWidth">
            <el-input-number v-model="label.textBorderWidth" />
          </el-form-item>
          <el-form-item label="textBorderType">
            <el-select v-model="label.textBorderType" placeholder="字体样式">
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
import { reactive, watch, defineEmits, defineProps, toRefs } from 'vue'

const label = reactive({
  show: false,
  position: '',
  color: '',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 14,
  align: '',
  verticalAlign: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  borderRadius: 0,
  borderType: 'solid',
  width: 0,
  height: 0,
  padding: 0,
  opacity: 0,
  textBorderColor: '',
  textBorderType: 'solid',
  textBorderWidth: 0
})

const emit = defineEmits('getLabelData')
const props = defineProps({
  index: {
    type: Number
  },
  isModules: {
    type: Boolean
  }
})

const { index, isModules } = toRefs(props)

watch(
  label,
  (newValue) => {
    if (isModules) {
      emit('getLabelData', { index, newValue })
    }
  },
  { deep: true }
)
</script>

<style></style>
