<template>
  <div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registerTrue({name:form.name,password:form.password,phone:form.phone})">注册
        </el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "Register",
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState([
        'form',
        'status'
      ])
    },
    methods: {
      ...mapActions([
        'registerTrue'
      ])
    },
    watch: {
      status: function () {
        if (this.status == 1) {
          console.log(4545)
          this.$http.post('/api/register', {data: this.form})
            .then((data) => {
              console.log(data)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
