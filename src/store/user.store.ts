import { defineStore } from "pinia";
import { IUser, IConnexionBody, IInscriptionBody } from '../interfaces/user.interface';
import axios from 'axios';
import { useAuthStore } from './auth.store';

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
                const response = await axios.put('http://localhost/pictoria/pictoria-back/users', {
                    username: body.username,
                    password: body.password
                });
                console.log(response.data);
                state.user = response.data.user;
                if(response.data !== 'User not found'){
                    useAuthStore().actions.saveToken(response.data, useAuthStore().state);
                    return true;
                }
                return false;
            } catch (error: any) {
                console.error(error);
                return false;
            }
        },
        async tryRegister(body: IInscriptionBody): Promise<void> {
            console.log(body)
            try {
                const response = await axios.post('http://localhost/pictoria/pictoria-back/users', {
                    name: body.name,
                    firstname: body.firstname,
                    address: body.address,
                    username: body.username,
                    password: body.password,
                    birthDate: body.birthDate,
                    nationality: body.nationality
                });
                console.log(response.data);
            } catch (error: any) {
                console.error(error);
            }
        }
    },
}));
