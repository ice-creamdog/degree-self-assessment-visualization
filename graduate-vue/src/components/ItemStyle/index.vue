<template>
  <div class="item-style-setting">
    <el-collapse accordion>
      <el-collapse-item title="itemStyle">
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
          <el-form-item label="shadowBlur">
            <el-input-number :step="1" v-model="itemStyle.shadowBlur" />
          </el-form-item>
          <el-form-item label="shadowColor">
            <el-color-picker v-model="itemStyle.shadowColor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item label="shadowXOffset">
            <el-input-number :step="1" v-model="itemStyle.shadowXOffset" />
          </el-form-item>
          <el-form-item label="shadowYOffset">
            <el-input-number :step="1" v-model="itemStyle.shadowYOffset" />
          </el-form-item>
          <el-form-item label="opacity">
            <el-input-number v-model="itemStyle.opacity" />
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { reactive, watch, defineEmits, defineProps, toRefs } from 'vue-demi'

const itemStyle = reactive({
  color: '',
  borderColor: '',
  borderWidth: '',
  borderType: 'solid',
  shadowBlur: 0,
  shadowColor: '',
  shadowXOffset: 0,
  shadowYOffset: 0,
  opacity: 1
})

const emit = defineEmits('getItemStyle')
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
  itemStyle,
  (newValue) => {
    if (isModules) {
      emit('getItemStyle', { index, newValue })
    }
  },
  { deep: true }
)
</script>

<style></style>
