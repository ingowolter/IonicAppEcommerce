export interface IUsuario{
    id?: number;
    nome?: string;
    email: string;
    password: string;
    token?:string;
}