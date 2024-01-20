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
                const response = await axios.put('http://localhost/pictoria/pictoria-back/', {
                    username: body.username,
                    password: body.password
                });
                console.log(response.data);
                state.user = response.data.user;

            } catch (error: any) {
                console.error(error);
            }
        },
        async tryRegister(body: IInscriptionBody): Promise<void> {
            try {
                const response = await axios.post('http://localhost/pictoria/pictoria-back/', {
                    name: "alex",
                    firstname: "ric",
                    address: "sdf",
                    username: "aaa",
                    password: "prout"
                });
                console.log(response.data);
            } catch (error: any) {
                console.error(error);
            }
        }
    },
}));
