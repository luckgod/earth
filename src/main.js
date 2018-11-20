// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from "axios"
import store from './store/'

import { TabContainer, TabContainerItem ,Navbar,Popup,Switch,MessageBox,Toast,Field ,Picker  } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Popup.name, Popup);
Vue.component(Switch.name, Switch);
Vue.component(MessageBox.name, MessageBox);
Vue.component(Toast.name, Toast);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.config.productionTip = false

Vue.use(MintUI)

/* eslint-disable no-new */
Vue.prototype.dataApi = require('./dataApi').default
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})

