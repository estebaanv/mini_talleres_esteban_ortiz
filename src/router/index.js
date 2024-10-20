import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import PalabraSecreta from "../views/PalabraSecreta.vue"

const routes = [
    { path: '/', component: Main},
    { path: '/palabra/:numero', component: PalabraSecreta}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router