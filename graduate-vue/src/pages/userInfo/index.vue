<template>
  <div class="user-info">
    <el-form :model="form" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="学院">
        <el-input v-model="form.college" />
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.unit" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改密码</el-button>
        <el-button>登出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  unit: '',
  college: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style></style>
