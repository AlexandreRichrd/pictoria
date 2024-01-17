import {createRouter, createWebHistory} from 'vue-router'
import HomePageVue from './pages/HomePage.vue'
import ModaleConnectionVue from './components/modale/ModaleConnection.vue'
import ModaleInscriptionVue from './components/modale/ModaleInscription.vue'
import ProfilePageVue from './pages/ProfilePage.vue'
import PersonnalGalleryVue from './components/profile/PersonnalGallery.vue'

const routes = [
    {
        path: '/',
        component: HomePageVue,
        children:[
            {
                path: '/connection',
                component: ModaleConnectionVue
            },
            {
                path: '/inscription',
                component: ModaleInscriptionVue
            }
        ]
    },
    {
        path: '/profile',
        component: ProfilePageVue,
        children: [
            {
                path: 'gallery',
                component: PersonnalGalleryVue
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router