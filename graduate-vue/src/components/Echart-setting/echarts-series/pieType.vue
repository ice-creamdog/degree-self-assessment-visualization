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
      <el-form-item label="data">
        <div>
          <el-button @click="handleAddDataObject">添加数据块</el-button>
        </div>
        <div v-for="(item, indexData) in pieType.data" :key="indexData">
          <el-button class="block" @click="handleDeleteDataObject(indexData)"></el-button>
          <el-input-number
            class="block"
            v-model="pieType.data[indexData].value"
            placeholder="value"
          ></el-input-number>
          <el-input
            class="block"
            v-model="pieType.data[indexData].name"
            placeholder="name"
          ></el-input>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, defineProps, toRefs } from 'vue'
import { difference } from '@/utils/commonFun.js'
const pieType = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  center: [0, 0],
  radius: [0, 0],
  data: [{ value: 0, name: '' }]
})

const basePieType = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  center: [0, 0],
  radius: [0, 0],
  data: [{ value: 0, name: '' }]
}

const emit = defineEmits('getPieTypeData')
const props = defineProps({
  index: {
    type: Number
  }
})
const { index } = toRefs(props)

const handleAddDataObject = () => {
  pieType.data.push({ value: 0, name: '' })
}

const handleDeleteDataObject = (val) => {
  if (val > 0) pieType.data.splice(val, 1)
}

watch(
  pieType,
  (newValue) => {
    const diffPieType = difference(newValue, basePieType)
    emit('getPieTypeData', { index, newValue: diffPieType })
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.block {
  display: inline-block;
}
</style>
