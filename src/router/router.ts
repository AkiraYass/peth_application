import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../view/PethGame/components/StartPage.vue';
import GamePage from '../view/PethGame/components/GamePage.vue'

const routes = [
    { path: '/', name: 'home', component: StartPage },
    { path: '/peth-play', name: 'play', component: GamePage },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;