<template>
  <div class="project-lists">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="创建时间" width="150" />
      <el-table-column prop="name" label="更新时间" />
      <el-table-column prop="state" label="学位等级" />
      <el-table-column prop="city" label="学位学科" />
      <el-table-column prop="address" label="学位单位" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button type="text" size="small" @click="handleClick">详情</el-button>
          <el-button type="text" size="small" @click="handleEditProject">编辑</el-button>
          <el-button type="text" size="small" @click="handleDeleteProject">删除</el-button>
          <el-button type="text" size="small" @click="handleShowProject">展示</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue-demi'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const handleClick = () => {
      console.log('click')
    }

    const store = useStore()
    const router = useRouter()

    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office'
      }
    ]

    let projectsList = reactive({})

    const handleGetProjectsList = async () => {
      try {
        console.log(3)
        const res = await store.dispatch('projectEdit/getProjectList')
        console.log(res)
        projectsList.value = res
      } catch (error) {
        console.log(error)
      }
    }

    const handleDeleteProject = () => {
      handleGetProjectsList()
    }
    const handleEditProject = () => {
      router.push('/project/edit')
    }
    const handleShowProject = () => {
      router.push('/project/show')
    }
    onMounted(() => {
      handleGetProjectsList()
    })

    return {
      handleClick,
      tableData,
      projectsList,
      handleGetProjectsList,
      handleDeleteProject,
      handleEditProject,
      handleShowProject
    }
  }
}
</script>

<style></style>
