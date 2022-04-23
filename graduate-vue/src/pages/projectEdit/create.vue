<template>
  <div class="project-create">
    <el-form :model="form" label-width="120px" :rules="rules" ref="projectRef">
      <el-form-item label="授予单位" prop="degreeUnit">
        <el-input v-model="form.degreeUnit" />
      </el-form-item>
      <el-form-item label="授予单位代码" prop="unitCode">
        <el-input v-model.number="form.unitCode" />
      </el-form-item>
      <el-form-item label="授权学科" prop="subjectName">
        <el-input v-model="form.subjectName" />
      </el-form-item>
      <el-form-item label="授权学科代码" prop="subjectCode">
        <el-input v-model.number="form.subjectCode" />
      </el-form-item>

      <el-form-item>
        <el-button @click="handleAddProject(projectRef)">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    // do not use same name with ref
    let form = reactive({
      unitCode: '',
      degreeUnit: '',
      subjectCode: '',
      subjectName: ''
    })

    const store = useStore()
    const projectRef = ref(null)
    let formStatus = ref(false)

    // 验证是否通过
    const rules = reactive({
      unitCode: [
        { required: true, message: '请输入单位代码', trigger: 'blur' },
        { type: 'number', message: '单位代码必须为数字' }
      ],
      degreeUnit: [
        { required: true, message: '请输入单位名称', trigger: 'blur' },
        { type: 'string', message: '必须为字符串' }
      ],
      subjectName: [
        { required: true, message: '请输入学科名称', trigger: 'blur' },
        { type: 'string', message: '必须为字符串' }
      ],
      subjectCode: [
        { required: true, message: '请输入学科代码', trigger: 'blur' },
        { type: 'number', message: '必须为数字' }
      ]
    })

    const handleAddProject = async (formRef) => {
      const res = await formRef.validate()
      if (res) {
        const projectData = reactive({
          degree_unit: form.degreeUnit,
          unit_code: form.unitCode,
          subject_code: form.subjectCode,
          subject: form.subjectName,
          user_id: localStorage.getItem('userId')
        })
        try {
          const res = await store.dispatch('projectEdit/addProject', projectData)
          if (res) {
            formRef.resetFields()
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
    return {
      form,
      handleAddProject,
      rules,
      projectRef,
      formStatus
    }
  }
}
</script>

<style></style>
