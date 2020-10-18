import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('myon',{
  bind(el,binding){
    if(binding.arg == 'jumbotron'){
      if(typeof binding.value === "function"){
          el.style.height='300px';
          el.style.margin='0 auto';
          el.style.textAlign='center';
          el.style.backgroundColor="#375288";
      }

    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
