import{ IAula } from './IAula';

export interface ICurso{
    id?: number;
    titulo:string; 
        descricao: string; 
        valor: number; 
        valor_text: string; 
        img_name: string; 
        aulas: IAula[];
}