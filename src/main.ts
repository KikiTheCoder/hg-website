import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboarddoublearrowdown  } from "oh-vue-icons/icons";

import './assets/main.css'

addIcons(MdKeyboarddoublearrowdown);

const app = createApp(App)
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
