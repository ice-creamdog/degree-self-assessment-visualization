<template>
  <div class="project-create">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Project Name">
        <el-input v-model="form.projectName" />
      </el-form-item>
      <el-form-item label="Degree Level">
        <el-input v-model="form.degreeLevel" />
      </el-form-item>
      <el-form-item label="Subject Name">
        <el-input v-model="form.subjectName" />
      </el-form-item>
      <el-form-item label="Degree unit">
        <el-input v-model="form.degreeUnit" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    // do not use same name with ref
    const form = reactive({
      projectName: '',
      degreeLevel: '',
      degreeUnit: '',
      subjectName: ''
    })

    const onSubmit = () => {
      console.log('submit!')
    }
    return {
      form,
      onSubmit
    }
  }
}
</script>

<style></style>
