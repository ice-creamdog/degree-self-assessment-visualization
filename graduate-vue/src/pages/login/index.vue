<template>
  <div class="login">
    <el-form
      class="login-form"
      label-width="100px"
      :model="ruleForm"
      style="max-width: 550px"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-form-item label="工号" prop="user">
        <el-input v-model="ruleForm.user" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="validateNumber">
        <el-input v-model="ruleForm.validateNumber" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button @click="login(ruleFormRef)">登录</el-button>
        <el-button>修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// 数据

export default {
  setup() {
    const ruleForm = reactive({
      user: '',
      password: '',
      validateNumber: ''
    })
    const loading = ref(false)
    const store = useStore()
    const router = useRouter()
    const ruleFormRef = ref(null)

    // 验证
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账号不能为空'))
      } else {
        const reg = /^\w{6,10}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('账号类型错误，请重新输入'))
        }
      }
    }

    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('密码至少为8-16位'))
        }
      }
    }

    const validateNumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'))
      } else {
        callback()
      }
    }

    const rules = reactive({
      user: [{ validator: validateUser, trigger: 'blur' }],
      password: [{ validator: validatePassword, trigger: 'blur' }],
      validateNumber: [{ validator: validateNumber, trigger: 'blur' }]
    })

    async function login(formEl) {
      loading.value = true
      let timer
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        loading.value = false
      }, 500)

      // 验证是否通过
      if (!formEl) return
      // 获取表单
      const loginData = reactive({
        user_name: ruleForm.user,
        password: ruleForm.password
      })

      try {
        const res = await store.dispatch('user/login', loginData)
        if (res) {
          console.log(res)
          router.push({ path: '/project' })
        }
      } catch (error) {
        console.error(error)
      }

      // 发起网络请求
    }
    // 获取账号、密码、做验证
    // 做验证码验证
    // 发起请求
    // 获取工号、验证工号格式

    // 获取密码
    // 发起请求
    return {
      rules,
      login,
      ruleFormRef,
      ruleForm
    }
  }
}
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
