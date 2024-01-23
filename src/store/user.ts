import { defineStore } from "pinia";
import { IUser, IConnexionBody, IInscriptionBody } from '../interfaces/user.interface';
import axios from 'axios';
import { useAuthStore } from './auth';

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
        async tryConnection(body: IConnexionBody, state:any): Promise<boolean> {
            try {
                const response = await axios.put('http://localhost/pictoria/pictoria-back/', {
                    username: body.username,
                    password: body.password
                });
                console.log(response.data);
                state.user = response.data.user;
                useAuthStore().actions.saveToken(response.data.token, useAuthStore().state);
                useAuthStore().actions.saveTokenInCookie(response.data.token);
                return true;
            } catch (error: any) {
                console.error(error);
                return false;
            }
        },
        async tryRegister(body: IInscriptionBody): Promise<void> {
            try {
                const response = await axios.post('http://localhost/pictoria/pictoria-back/', {
                    name: body.name,
                    firstname: body.firstname,
                    address: body.address,
                    username: body.username,
                    password: body.password,
                });
                console.log(response.data);
            } catch (error: any) {
                console.error(error);
            }
        }
    },
}));
