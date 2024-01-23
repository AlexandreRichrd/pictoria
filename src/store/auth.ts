import { defineStore } from "pinia";
import { useCookies } from '@vueuse/integrations/useCookies';

export const useAuthStore = defineStore('auth', () => ({
    state: () => ({
        token: '', // Charger le token depuis les cookies au démarrage
        // cookies: useCookies
    }),
    getters: {
        isAuthenticated: (state: any) => !!state.token,
    },
    actions: {
        saveToken(token: string, state: any) {
            state.token = token;
            console.log('Token saved');
        },
        clearToken(state: any) {
            state.token = '';
            //Cookies.remove('jwt-token'); // Supprimer le cookie
        },
        saveTokenInCookie(token: string, state: any) {
            // const cookies = useCookies;
            // cookies.set('jwt-token', token, '7d');
            // state.cookies.set('jwt-token', token, '7d');
        }
    }
}));