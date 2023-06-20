import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import AllPer from './views/AllPer.vue';
// import Page2 from './views/Page2.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'AllPer',
            component: AllPer,
        }
        // {
        //     path: '/page2',
        //     name: 'page2',
        //     component: Page2
        // }
    ]
})