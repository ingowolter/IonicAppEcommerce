import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { ICurso } from '../../interfaces/ICurso';
import { IAula } from '../../interfaces/IAula';
import { CursosProvider } from "../../providers/cursos/cursos"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: ICurso[];
  
  constructor(public navCtrl: NavController, public cursoProvider: CursosProvider) {
    // this.lista = this.cursoProvider.all();
  }

  ionViewDidEnter(){

    // Buscando dados
    this.cursoProvider.allTeste().subscribe(res =>{
      this.lista = res;
    }, erro =>{
      console.log("Erro: " + erro.message);
    });

    // dados manupulados
    let data:ICurso = {
      "id": 2,
      "titulo":"Andoid na prática",
      "descricao":"Entenda o funcionamento básico do Photoshop CC, principal software de manipulação de imagens do mercado. E um dos softwares mais populares do mundo.",
      "valor":23.90,
      "valor_text":"23,90",
      "img_name":"assets/imgs/ps.jpg",
      "aulas":[
        {
          "id":1,
          "ordem":1,
          "titulo":"Introdução ao Curso",
          "tempo":"10:00",
          "video":"https://www.youtube.com/embed/jX9nkmdq_sM",
        },
        {
          "id":2,
          "ordem":2,
          "titulo":"Configurando o Ambiente",
          "tempo":"15:00",
          "video":"https://www.youtube.com/embed/jX9nkmdq_sM",
        }
      ]
    }

  /*
    //Adiciona
    this.cursoProvider.addTeste(data).subscribe(res =>{
      console.log(res);
    }, erro =>{
      console.log("Erro: " + erro.message);
    }); 

    //Edit
    this.cursoProvider.editTeste(data).subscribe(res =>{
      console.log(res);
    }, erro =>{
      console.log("Erro: " + erro.message);
    });

    // Delete
    this.cursoProvider.deleteTeste(data).subscribe(res =>{
      console.log(res);
    }, erro =>{
      console.log("Erro: " + erro.message);
    });
     

    // Mostrar por id
    this.cursoProvider.showTeste(data).subscribe(res =>{
      console.log(res);
    }, erro =>{
      console.log("Erro: " + erro.message);
    });

    */

  }

  AbrirDetalhe(item){ 
    this.navCtrl.push(DetalhePage, {dados:item});
  }


}
