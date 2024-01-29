import type { IDraw } from "./draw.interface"

export interface IContest {
    numConcours: number
    theme: string
    dateDebut: string
    dateFin: string
    dateCreation: string
    etat: string
    recompense: string
}

export interface IContestAndIDraw {
    contest: IContest
    draws: IDraw[]
}
    