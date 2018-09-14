<template>
  <el-container>
    <el-header style="text-align: center">JavaWeb 登录注册作业</el-header>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6" :xs="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="text-align: center">
              <a class="icon iconfont el-icon-icon" @click="login">用户登录</a>
              /
              <a class="icon iconfont el-icon-zhuce" @click="register">用户注册</a>
            </div>
            <el-row>
              <el-col :span="12" :offset="6">
                <router-view></router-view>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  methods:{
    login(){
      this.$router.push({path:'/login'})
    },
    register(){
      this.$router.push({path:'/register'})
    }
  }
}
</script>

<style>
.el-container{
  margin-top: 80px;
  background:
    -webkit-linear-gradient(
      -45deg,
      rgb(235,241,246) 0%,
      rgb(171,211,238) 23%,
      rgb(137,195,235) 66%,
      rgb(213,235,251) 100%);
  /* Chrome10-25,Safari5.1-6 */
}
  .el-card{
    background:
      -webkit-linear-gradient(
        top,
        rgb(235, 241, 246) 0%,
        rgb(171, 211, 238) 23%,
        rgb(137, 195, 235) 66%,
        rgb(213, 235, 251) 100%);
    /* Chrome10-25,Safari5.1-6 */
  }
</style>
