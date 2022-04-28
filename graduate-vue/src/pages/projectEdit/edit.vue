<template>
  <div class="project-edit">
    <el-row :gutter="20" class="edit-layout">
      <el-col :span="5">
        <div class="custom-tree-container">
          <p>Using scoped slot</p>
          <data-list></data-list>
        </div>
      </el-col>
      <el-col :span="12" class="show">
        <echart-container class="echarts-show" :options="options" />
        <!-- {{ options }} -->
        <div class="data-show">{{ dataShow }}</div>
      </el-col>
      <el-col :span="7" class="setting-col">
        <el-scrollbar>
          <echart-setting></echart-setting>
          <div>
            <el-form :model="form" label-width="120px">
              <el-form-item label="Activity name">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>预览</el-button>
              </el-form-item>
              <el-button type="text" @click="dialogTableVisible = true">预览</el-button>

              <el-dialog v-model="dialogTableVisible" title="Shipping address">
                <div>引入echarts</div>
              </el-dialog>
            </el-form>
          </div>
        </el-scrollbar>
      </el-col>
      <el-col :span="6" class="echarts-setting"></el-col>
    </el-row>
    <el-row :gutter="20" class="show">
      <el-col :span="6" class="resource-data"></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed, toRefs } from 'vue'
import EchartSetting from '@/components/Echart-setting/index.vue'
import EchartContainer from 'coms/Echarts-container/index.vue'
import { useStore } from 'vuex'
import DataList from 'coms/dataList/index.vue'

// do not use same name with ref
const form = reactive({
  name: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const dialogTableVisible = ref(false)

const store = useStore()
let options = reactive({})
options = store.getters['echartsOptions/getOptions']

const dataShow = computed(() => store.getters['echartsOptions/getDataShow'])

watch(
  options,
  (newValue) => {
    options = newValue
    console.log(options)
  },

  { deep: true }
)

onMounted(() => {
  options = store.getters['echartsOptions/getOptions']
  console.log(options)
})
// 操作options数据

// 获取项目详细，分别展示
// 点击数据模块，选择ECharts模型，配置模型样式，提交请求，获取项目详细
// 发送请求，每一个数据对象，发送userId，projectId，第几块模块，第几个数据对象，对应的ECharts模型描述
// ECharts编辑组件
// 功能：可以选择模型，可以编辑图表容器大小、样式、数据集、坐标轴、数据转换、视觉映射、图例、事件行为，预展示
</script>

<style scss scoped>
.project-edit {
  height: 100%;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.edit-layout {
  height: 100%;
}

.setting-col {
  height: 100%;
}
.show {
}
.echarts-show {
  width: 100%;
  height: 65%;
}
.data-show {
  width: 100%;
  height: 30%;
  background-color: aqua;
}
</style>
