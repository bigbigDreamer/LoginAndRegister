export default {
  loginTrue({commit},{name,password}){
    commit('loginTrue',{name,password})
  },
  registerTrue({commit},{name,password,phone}){
    commit('registerTrue',{name,password,phone})
  }
}
