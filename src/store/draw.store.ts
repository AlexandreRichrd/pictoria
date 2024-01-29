import { defineStore } from 'pinia'
import axios from 'axios'
import type { IDraw, IDrawBody } from '../interfaces/draw.interface'

export const useDrawStore = defineStore('draw', () => ({
    state: () => ({
        draws: [] as IDraw[]
    }), 
    getters: {
        getDraws: (state: any) => {
            return state.draws
        },
        getDrawById: (state: any, id: number) => {
            return state.draws.find((draw: IDraw) => draw.numDessin === id)
        },
        async getDrawsByContestId(state:any, contestId: number): Promise<IDraw[]> {
            if(state.draws.length == 0) {
                await state.actions.fetchAllDraws(state)
            }
            return state.draws.filter((draw: IDraw) => draw.numConcours === contestId)
        }
    },
    actions: {
        async fetchAllDraws(state: any): Promise<void> {
            try {
                const response = await axios.get('http://localhost/pictoria/pictoria-back/draws')
                state.draws = response.data
                console.log(response.data)
            } catch (error: any) {
                console.error(error)
            }
        },
        async submitDraw(draw: IDrawBody): Promise<void> {
            try {
                const response = await axios.post('http://localhost/pictoria/pictoria-back/draws', draw)
                console.log(response.data)
            } catch (error: any) {
                console.error(error)
            }
        }
    }
}))