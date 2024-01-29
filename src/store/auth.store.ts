import { defineStore } from "pinia";
import { useCookies } from '@vueuse/integrations/useCookies';

export const useAuthStore = defineStore('auth', () => {
    const cookies = useCookies();

    return {
        state: () => ({
            token: cookies.get('jwt-token') || '', // Charger le token depuis les cookies
        }),
        getters: {
            isAuthenticated: (state: any) => !!state.token,
        },
        actions: {
            saveToken(token: string, state: any) {
                state.token = token;

                
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 7);
                cookies.set('jwt-token', token, { expires: expirationDate});
                console.log('Token saved');
            },
            clearToken(state:any) {
                state.token = '';
                cookies.remove('jwt-token');
            }
        }
    };
});
