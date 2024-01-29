import { defineStore } from "pinia";
import type { IContest, IContestAndIDraw } from '../interfaces/contest.interface';
import axios from 'axios';

export const useContestStore = defineStore('contest', () => ({
    state: () => ({
        contests: [] as IContest[],
        contestAndDraws: [] as IContestAndIDraw[]
    }),
    getters: {
        getContests: (state: any) => state.contests,
        getContestById: (state: any, id: number) => state.contests.filter((contest: IContest) => contest.numConcours === id),
    },
    actions: {
        async fetchAllContests(state: any) {
            try {
                const response = await axios.get('http://localhost/pictoria/pictoria-back/contests')
                state.contests = response.data
                console.log(state.contests)
            } catch (error) {
                console.error(error)
            }
        }
    },
}));
