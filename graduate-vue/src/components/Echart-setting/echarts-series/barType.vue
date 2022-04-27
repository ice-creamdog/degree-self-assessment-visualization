<template>
  <div class="bar-type">
    <el-form v-model="barType" size="small">
      <el-form-item label="showBackgroundColor">
        <el-switch v-model="barType.showBackgroundColor"></el-switch>
      </el-form-item>

      <div v-if="barType.showBackgroundColor">
        <el-collapse accordion>
          <el-collapse-item title="backgroundColorStyle">
            <el-form-item label="color">
              <el-color-picker
                v-model="barType.backgroundColorStyle.color"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="borderColor">
              <el-color-picker
                v-model="barType.backgroundColorStyle.borderColor"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="borderWidth">
              <el-input-number v-model="barType.backgroundColorStyle.borderWidth" />
            </el-form-item>
            <el-form-item label="borderType">
              <el-select v-model="barType.backgroundColorStyle.borderType" placeholder="字体样式">
                <el-option label="solid" value="solid" />
                <el-option label="dashed" value="dashed" />
                <el-option label="dotted" value="dotted" />
              </el-select>
            </el-form-item>
            <el-form-item label="shadowBlur">
              <el-input-number :step="1" v-model="barType.backgroundColorStyle.shadowBlur" />
            </el-form-item>
            <el-form-item label="shadowColor">
              <el-color-picker
                v-model="barType.backgroundColorStyle.shadowColor"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="shadowXOffset">
              <el-input-number :step="1" v-model="barType.backgroundColorStyle.shadowXOffset" />
            </el-form-item>
            <el-form-item label="shadowYOffset">
              <el-input-number :step="1" v-model="barType.backgroundColorStyle.shadowYOffset" />
            </el-form-item>
            <el-form-item label="opacity">
              <el-input-number v-model="barType.backgroundColorStyle.opacity" />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </div>

      <el-form-item label="data is array">
        <el-switch v-model="isArray" />
      </el-form-item>
      <el-form-item label="data" v-if="isArray">
        <el-input v-model="barType.data" placeholder="请复制数据粘贴"></el-input>
      </el-form-item>
      <el-form-item v-else>
        <el-input v-model="dataModel.value" placeholder="value"></el-input>
        <el-input v-model="dataModel.name" placeholder="name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, defineProps, toRefs } from 'vue'

const barType = reactive({
  showBackgroundColor: false,
  backgroundColorStyle: {
    color: '',
    borderColor: '',
    borderWidth: '',
    borderType: 'solid',
    shadowBlur: 0,
    shadowColor: '',
    shadowXOffset: 0,
    shadowYOffset: 0,
    opacity: 1
  },
  data: []
})

const emit = defineEmits('getBarTypeData')
const props = defineProps({
  index: {
    type: Number
  }
})
const { index } = toRefs(props)
watch(
  barType,
  (newValue) => {
    emit('getBarTypeData', { index, newValue })
  },
  { deep: true }
)

const isArray = ref(true)
const dataModel = reactive({})
</script>

<style></style>
