import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

 
  usuario: IUsuario = { nome:'', email: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider:UsuariosProvider) {
  }

  ionViewDidLoad() {
    let usuario = {
      "nome": "Ingo",
      "email": "ingo@mgial.com",
      "password": "123456",
      "id": 1
    };
    this.usuariosProvider.showUsuario(usuario).subscribe(res => {
      this.usuario = res;
    }, erro => {
      console.log("Erros:" + erro.message);
    });
  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  editUsuario(){
    this.usuariosProvider.editUsuario(this.usuario).subscribe(res => {
        this.usuario = res;
      }, erro => {
        console.log("Erros:" + erro.message);
      });
  }
}
