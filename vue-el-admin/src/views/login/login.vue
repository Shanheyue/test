<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
<style lang="less" scoped>
.form-container {
  width: 400px;
  position: relative;
  margin: 0 auto;
  top: 200px;
}
</style>
