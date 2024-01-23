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
    birthDate: string
    nationality: string
    address: string
    username: string
    password: string
}

export interface IInscriptionBodyOne {
    name: string
    firstname: string
    birthDate: string
    nationality: string
}

export interface IInscriptionBodyTwo {
    street: number
    address: string
    city: string
    country: string
}

export interface IInscriptionBodyThree {
    username: string
    password: string
}