import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import AllPer from './views/AllPer.vue';
import OnlyMusicals from './views/OnlyMusicals.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'all',
            component: AllPer
        },
        {
            path: '/musicals',
            name: 'mus',
            component: OnlyMusicals
        }
    ]
})