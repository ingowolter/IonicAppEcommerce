import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from '../../interfaces/ICurso';

/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  allTeste(){
    return this.http.get<ICurso[]>("http://localhost:3000/cursos");
  }
  addTeste(data:ICurso){
    return this.http.post<ICurso>("http://localhost:3000/cursos", data);
  }
  editTeste(data:ICurso){
    return this.http.put<ICurso>("http://localhost:3000/cursos"+data.id, data);
  }
  deleteTeste(data:ICurso){
    return this.http.delete<ICurso>("http://localhost:3000/cursos/"+data.id);
  }

   showTeste(data:ICurso){
      return this.http.get<ICurso>("http://localhost:3000/cursos/"+data.id);
   } 
}
