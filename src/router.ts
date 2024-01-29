import {createRouter, createWebHistory} from 'vue-router'
import HomePageVue from './pages/HomePage.vue'
import ModaleConnectionVue from './components/modale/ModaleConnection.vue'
import ModaleInscriptionVue from './components/modale/ModaleInscription.vue'
import ProfilePageVue from './pages/ProfilePage.vue'
import PersonnalGalleryVue from './components/profile/PersonnalGallery.vue'
import ContestPageVue from './pages/ContestPage.vue'
import ContestListPageVue from './pages/ContestListPage.vue'
import DrawModaleVue from './components/modale/DrawModale.vue'

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
    },
    {
        path: '/contest/:id',
        component: ContestPageVue,
        children: [
            {
                path: 'deposit',
                component: DrawModaleVue
            }
        ]
    },
    {
        path: '/contestlist',
        component: ContestListPageVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router