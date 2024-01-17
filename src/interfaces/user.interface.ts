export interface IUser {
    username: string
    isConnected: boolean
}

export interface IConnexionBody {
    username:string
    password:string
}

export interface IInscriptionBody {
    name: string
    firstname: string
    address: string
    username: string
    password: string
}