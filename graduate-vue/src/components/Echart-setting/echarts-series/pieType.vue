<template>
  <div class="pie-type">
    <el-form v-model="pieType" size="small">
      <el-form-item label="top">
        <el-input-number :step="1" v-model="pieType.top" />
      </el-form-item>
      <el-form-item label="left">
        <el-input-number :step="1" v-model="pieType.left" />
      </el-form-item>
      <el-form-item label="width">
        <el-input-number :step="1" v-model="pieType.width" />
      </el-form-item>
      <el-form-item label="height">
        <el-input-number :step="1" v-model="pieType.height" />
      </el-form-item>
      <el-form-item label="center">
        <el-input-number :step="1" v-model="pieType.center[0]" />
        <el-input-number :step="1" v-model="pieType.center[1]" />
      </el-form-item>
      <el-form-item label="radius">
        <el-input-number :step="1" v-model="pieType.radius[0]" />
        <el-input-number :step="1" v-model="pieType.radius[1]" />
      </el-form-item>
      <el-form-item label="data is array">
        <el-switch v-model="isArray" />
      </el-form-item>
      <el-form-item label="data" v-if="isArray">
        <el-input v-model="pieType.data" placeholder="请复制数据粘贴"></el-input>
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

const pieType = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  center: [0.5, 0.5],
  radius: [0.5, 0.7],
  data: []
})

const isArray = ref(true)
const dataModel = reactive({})

const emit = defineEmits('getPieTypeData')
const props = defineProps({
  index: {
    type: Number
  }
})
const { index } = toRefs(props)
watch(
  pieType,
  (newValue) => {
    emit('getPieTypeData', { index, newValue })
  },
  { deep: true }
)
</script>

<style></style>
