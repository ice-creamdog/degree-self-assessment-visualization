<template>
  <div class="login">
    <el-form
      class="login-form"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="工号">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
      <el-form-item>
        <el-button>Submit</el-button>
        <el-button>New domain</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})
// 获取工号、验证工号格式

// 获取密码
// 发起请求
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
