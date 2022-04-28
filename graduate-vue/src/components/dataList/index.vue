<template>
  <div class="data-list">
    <el-collapse accordion>
      <el-collapse-item title="数据项" v-for="(item, i) in data" :key="i">
        <el-table :data="item" style="width: 100%">
          <el-table-column fixed prop="title" label="数据项" />
          <el-table-column fixed="right" label="操作">
            <template #default="scope">
              <el-tooltip class="box-item" effect="dark" content="编辑配置" placement="top">
                <el-button @click="handleEditItem(scope)" :icon="Edit" />
              </el-tooltip>
              <el-tooltip class="box-item" effect="dark" content="编辑配置" placement="top">
                <el-button @click="handleDeleteOption(scope)" :icon="Delete" />
              </el-tooltip>
              <el-tooltip class="box-item" effect="dark" content="删除数据" placement="top">
                <el-button @click="handleDeleteData(scope)" :icon="Delete" />
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { reactive } from 'vue-demi'

import { Delete, Edit } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const data = reactive([
  [
    {
      title: '模块一数据一',
      data: { a: 'fawe' },
      options: {}
    }
  ],
  [
    {
      title: '模块二数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块三数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块四数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块五数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块六数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块七数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块八数据一',
      data: {},
      options: {}
    }
  ],
  [
    {
      title: '模块九数据一',
      data: {},
      options: {}
    }
  ]
])

const store = useStore()

const handleEditItem = (e) => {
  const { row } = e
  store.commit('echartsOptions/setDataShow', row.data)
  if (!row.options) {
    store.commit('echartsOptions/setOptionsAll', row.options)
  }
  // 配置store的options，根据options更新setting栏
}

const handleDeleteData = (e) => {
  // 发起删除数据项请求
  // 获取项目数据赋值给data
}
const handleDeleteOption = (e) => {
  // 发起删除数据项请求
  // 获取项目数据
}
</script>

<style lang="scss" scoped></style>
