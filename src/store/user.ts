import { defineStore } from "pinia";
import { IUser, IConnexionBody, IInscriptionBody } from '../interfaces/user.interface';
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
              const response = await axios.post('http://127.0.0.1/picock', {
                username: body.username,
                password: body.password
              });
      
              alert(response.data.message);
              state.user = response.data.user;
              state.user.isConnected = true;
              localStorage.isConnected = true;
      
              // Mettez à jour l'état de l'utilisateur ici si nécessaire
            } catch (error: any) {
              alert(error.message || 'Une erreur est survenue');
            }
        },
        async tryRegister(body: IInscriptionBody): Promise<void> {
            try {
                const response = await axios.post('http://localhost/picock/inscription', {
                    name: body.name,
                    firstname: body.firstname,
                    address: body.address,
                    username: body.username,
                    password: body.password
                });
                console.log(response.data);
            } catch (error: any) {
                alert(error.message || 'Une erreur est survenue');
            }
        }
    },
}));
