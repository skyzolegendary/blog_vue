import { createApp } from 'vue'
import App from './App.vue'
import Presentation from './Presentation.vue';
import Home from './Home.vue';
import {createRouter, createWebHistory} from 'vue-router';
import './assets/style/index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/presentation', component: Presentation },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });





createApp(App).use(router).mount('#app')
