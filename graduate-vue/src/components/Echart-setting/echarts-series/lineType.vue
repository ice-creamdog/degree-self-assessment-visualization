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
        <el-input
          v-model="lineType.data"
          @change="handleDataToArray"
          placeholder="请复制数据粘贴"
        ></el-input>
      </el-form-item>
      <el-form-item v-else>
        <div><el-button @click="handleAddDataObject"></el-button></div>
        <div v-for="(item, indexModel) in dataModel" :key="indexModel">
          <el-button @click="handleDeleteDataObject(indexModel)"></el-button>
          <el-input-number
            v-model="dataModel[indexModel].value"
            placeholder="value"
          ></el-input-number>
          <el-input v-model="dataModel[indexModel].name" placeholder="name"></el-input>
          <el-select v-model="dataModel[indexModel].symbol" placeholder="symbol">
            <el-option label="circle" value="circle" />
            <el-option label="rect" value="rect" />
            <el-option label="roundRect" value="roundRect" />
            <el-option label="triangle" value="triangle" />
            <el-option label="diamond" value="diamond" />
            <el-option label="arrow" value="arrow" />
            <el-option label="none" value="none" />
            <el-option label="pin" value="pin" />
          </el-select>
          <el-input-number
            v-model="dataModel[indexModel].symbolSize"
            placeholder="symbolSize"
          ></el-input-number>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, defineProps, toRefs } from 'vue'
import { difference } from '@/utils/commonFun.js'
import { ElMessage } from 'element-plus'
const isArray = ref(true)

const lineType = reactive({
  symbol: '',
  symbolSize: 4,
  data: ''
})

const baseLineType = {
  symbol: '',
  symbolSize: 4,
  data: ''
}

const dataModel = reactive([
  {
    value: 0,
    name: '',
    symbol: '',
    symbolSize: 4
  }
])

const emit = defineEmits('getLineTypeData')
const props = defineProps({
  index: {
    type: Number
  }
})
const { index } = toRefs(props)

const handleAddDataObject = () => {
  dataModel.push({ value: 0, name: '' })
}

const handleDataToArray = (val) => {
  if (val.length) {
    let newVal = val.split(',')

    lineType.data = newVal.map(Number)
    console.log(lineType.data)
  } else lineType.data = []
}
const handleDeleteDataObject = (index) => {
  if (index > 0) dataModel.splice(index, 1)
}

watch(dataModel, (newValue) => {
  newValue.forEach((item) => {
    if (item.value !== 0 && item.name !== '') {
      lineType.data = newValue
      console.log(newValue)
    } else {
      ElMessage({
        message: '数据项不能为空',
        type: 'warning'
      })
    }
  })
})
watch(
  lineType,
  (newValue) => {
    const diffLineType = difference(newValue, baseLineType)
    emit('getLineTypeData', { index, newValue: diffLineType })
  },
  { deep: true }
)
</script>

<style lang="sass" scoped></style>
