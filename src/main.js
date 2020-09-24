// import Vue from 'vue'
import { createApp } from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import router from './router'


createApp(App).use(router).mount('#app')


// Vue.config.productionTip = false

// new Vue({
//   router, // we tell our vue instance to use this vue router
//   render: h => h(App),
// }).$mount('#app')

// Vue.use(BootstrapVue)
