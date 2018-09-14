import axios from 'axios'
export default {
  loginTrue(state,payload){
    state.form.name = payload.name;
    state.form.password = payload.password;
    if(payload!=null){
      state.status = 2
    }
    setTimeout(()=>{
      state.status = 0
    },1000)
  },
  registerTrue(state,payload){
    state.form.name = payload.name;
    state.form.password = payload.password;
    state.form.phone = payload.phone;
    if(payload!=null){
       state.status = 1
    }
    setTimeout(()=>{
      state.status = 0
    },1000)
    console.log(payload)
  }
}
