<template>
  <div class="tooltips-setting">
    <el-form v-model="color" size="small">
      <el-button @click="handleAddColor">添加颜色</el-button>
      <el-form-item v-for="(item, index) in color" :label="colorStr + index" :key="index">
        <el-color-picker v-model="color[index]"></el-color-picker>
        <el-button @click="handleDeleteColor(index)">删除</el-button>
      </el-form-item>
      <el-form-item label="背景色">
        <el-color-picker v-model="backgroundColor" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue-demi'
import { useStore } from 'vuex'

const color = reactive([
  '#5470c6',
  '#91cc75',
  '#fac858',
  '#ee6666',
  '#73c0de',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc'
])
const backgroundColor = ref(null)
const store = useStore()

const handleAddColor = () => {
  color.push('')
}

const handleDeleteColor = (index) => {
  color.splice(index, 1)
}
const colorStr = 'color'
watch(
  color,
  (newValue) => {
    // if (newValue.show) {

    const data = {
      key: 'color',
      newValue
    }
    console.log(data)
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'tooltip')
    // }
    console.log(store.state.echartsOptions.options)
  },
  {
    deep: true
  }
)

watch(
  backgroundColor,
  (newValue) => {
    // if (newValue.show) {

    const data = {
      key: 'backgroundColor',
      newValue
    }
    console.log(data)
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'tooltip')
    // }
    console.log(store.state.echartsOptions.options)
  },
  {
    deep: true
  }
)
</script>

<style>
.el-form-item {
  margin-bottom: 0;
}
</style>
