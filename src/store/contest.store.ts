import { defineStore } from "pinia";
import type { IContest } from '../interfaces/contest.interface';
import axios from 'axios';

export const useContestStore = defineStore('contest', () => ({
    state: () => ({
        contests: [] as IContest[]
    }),
    getters: {
        getContests: (state: any) => {
            return state.contests;
        }
    },
    actions: {
        async fetchAllContests(state: any): Promise<void> {
            try {
                const response = await axios.get('http://localhost/pictoria/pictoria-back/contests');
                state.contests = response.data;
                console.log(response.data);
            } catch (error: any) {
                console.error(error);
            }
        }
    }
}));
