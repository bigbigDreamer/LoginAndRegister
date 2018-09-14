<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginTrue({name:form.name,password:form.password})">登陆</el-button>
        <el-button >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState,mapActions} from 'vuex'
    export default {
        name: "Login",
      computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState([
             'form',
             'status'
        ])
      },
      methods: {
        ...mapActions([
          // `mapActions` 也支持载荷：
          'loginTrue' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
        ])
    },
      watch:{
          status:function () {
            if(this.status ==2){
              this.$http.post('/api/login',{data:this.form})
                .then((data)=>{
                  console.log(data)
                })
                .catch((err)=>{
                  console.log(err)
                })
            }
          }
      }

  }
</script>

<style scoped>

</style>
