import {createRouter, createWebHistory} from 'vue-router'
import HomePageVue from './pages/HomePage.vue'
import ModaleConnectionVue from './components/modale/ModaleConnection.vue'
import ProfilePageVue from './pages/ProfilePage.vue'

const routes = [
    {
        path: '/',
        component: HomePageVue,
        children:[
            {
                path: '/connection',
                component: ModaleConnectionVue
            }
        ]
    },
    {
        path: '/profile',
        component: ProfilePageVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router