export interface IDraw {
    numDessin: number
    numCompetiteur: number
    commentaire: string
    dateRemise: string
    numConcours: number
    leDessin: Blob
}

export interface IDrawBody {
    numCompetiteur: number
    commentaire: string
    dateRemise: string
    numConcours: number
    leDessin: Blob
}