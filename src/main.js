import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Categorie from "@/components/Categorie";
import Prodotti from "@/components/Prodotti";
import {ApiConfig} from "@/config";




const routes = [
    { path: '/', name: 'categorie', component: Categorie },
    { path: '/prodotti/:id/:tit/:order', name: 'prodotti', component: Prodotti },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
ApiConfig.ROUTER=router;
