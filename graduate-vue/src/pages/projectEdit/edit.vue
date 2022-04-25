<template>
  <div class="project-edit">
    <el-row :gutter="20" class="edit-layout">
      <el-col :span="5">
        <div class="custom-tree-container">
          <p>Using scoped slot</p>
          <el-tree :data="dataSource" show-checkbox node-key="id" :expand-on-click-node="false">
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <a @click="append(data)">Append</a>
                  <a @click="remove(node, data)">Delete</a>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
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
      <el-col :span="12" class="pre-show"></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import EchartSetting from '@/components/Echart-setting/index.vue'

let id = 1000

const append = (data) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node, data) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const dataSource = reactive([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1'
          },
          {
            id: 10,
            label: 'Level three 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1'
      },
      {
        id: 6,
        label: 'Level two 2-2'
      }
    ]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1'
      },
      {
        id: 8,
        label: 'Level two 3-2'
      }
    ]
  }
])

// do not use same name with ref
const form = reactive({
  name: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const dialogTableVisible = ref(false)

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
</style>
