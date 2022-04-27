<template>
  <div class="line-type">
    <el-form v-model="lineType" size="small">
      <el-form-item label="symbol">
        <el-select v-model="lineType.symbol" placeholder="symbol">
          <el-option label="circle" value="circle" />
          <el-option label="rect" value="rect" />
          <el-option label="roundRect" value="roundRect" />
          <el-option label="triangle" value="triangle" />
          <el-option label="diamond" value="diamond" />
          <el-option label="arrow" value="arrow" />
          <el-option label="none" value="none" />
          <el-option label="pin" value="pin" />
        </el-select>
      </el-form-item>
      <el-form-item label="symbolSize">
        <el-input-number v-model="lineType.symbolSize" placeholder="symbolSize"></el-input-number>
      </el-form-item>
      <el-form-item label="data is array">
        <el-switch v-model="isArray" />
      </el-form-item>
      <el-form-item label="data" v-if="isArray">
        <el-input v-model="lineType.data" placeholder="请复制数据粘贴"></el-input>
      </el-form-item>
      <el-form-item v-else>
        <el-input v-model="dataModel.value" placeholder="value"></el-input>
        <el-input v-model="dataModel.name" placeholder="name"></el-input>
        <el-select v-model="dataModel.symbol" placeholder="symbol">
          <el-option label="circle" value="circle" />
          <el-option label="rect" value="rect" />
          <el-option label="roundRect" value="roundRect" />
          <el-option label="triangle" value="triangle" />
          <el-option label="diamond" value="diamond" />
          <el-option label="arrow" value="arrow" />
          <el-option label="none" value="none" />
          <el-option label="pin" value="pin" />
        </el-select>
        <el-input-number v-model="dataModel.symbolSize" placeholder="symbolSize"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, defineProps, toRefs } from 'vue'
const isArray = ref(true)

const lineType = reactive({
  symbol: '',
  symbolSize: 4,
  data: []
})

const dataModel = reactive({
  value: '',
  name: '',
  symbol: '',
  symbolSize: 4
})

const emit = defineEmits('getLineTypeData')
const props = defineProps({
  index: {
    type: Number
  }
})
const { index } = toRefs(props)
watch(
  lineType,
  (newValue) => {
    emit('getLineTypeData', { index, newValue })
  },
  { deep: true }
)
</script>

<style></style>
