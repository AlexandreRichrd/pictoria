import { defineStore } from "pinia";
import { IUser, IConnexionBody } from '../interfaces/user.interface';
import axios from 'axios';

export const useUserStore = defineStore('user', () => ({
    state: () => ({
        user: null as IUser | null,
    }),
    
    getters: {
        getCurrentUser: (state: any) => {
            return state.user;
        },
        getUserIsConnected: (state: any) => {
            if(state.user === null) return false;
            return true;
        }
    },
    actions: {
        async tryConnection(body: IConnexionBody, state:any): Promise<void> {
            try {
              const response = await axios.post('http://127.0.0.1/pictoria/pictoria-back/', {
                username: body.username,
                password: body.password
              });
      
              alert(response.data.message);
              state.user = response.data.user;
              state.user.isConnected = true;
              
      
              // Mettez à jour l'état de l'utilisateur ici si nécessaire
            } catch (error: any) {
              alert(error.message || 'Une erreur est survenue');
            }
        },
    },
}));
