import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  peso: number;
  altura: number;
  resultadoImc: number;
  descricao: string;

  /**
   * Abaixo de 18,5	Você está abaixo do peso ideal
   * Entre 18,5 e 24,9	Parabéns — você está em seu peso normal!
   * Entre 25,0 e 29,9	Você está acima de seu peso (sobrepeso)
   * Entre 30,0 e 34,9	Obesidade grau I
   * Entre 35,0 e 39,9	Obesidade grau II
   * 40,0 e acima	Obesidade grau III
   */
  calcularImc(){
    this.resultadoImc = this.peso / (this.altura * this.altura);
    this.descricao = this.descricaoImc(this.resultadoImc);
    console.log(this.resultadoImc);
    console.log(this.descricao);
    this.exibirResultado();
  }

  limparCampos() {
    this.altura = null;
    this.peso = null;
    this.resultadoImc = null;
    this.descricao = null;
  }

  descricaoImc(imc: number) {
     if(imc < 18.5){
      return 'Você está abaixo do peso ideal';
     } else if(imc >= 18.5 && imc < 25.0){
      return 'Parabéns — você está em seu peso normal!';
     } else if(imc >= 25.0 && imc < 30.0){
      return 'Você está acima de seu peso ideal (sobrepeso)';
    } else if(imc >= 30.0 && imc < 35.0){
      return 'Você está com obesidade grau I';
    } else if(imc >= 35.0 && imc < 40.0){
      return 'Você está com obesidade grau II';
    } else if(imc >= 40){
      return 'Você está com obesidade grau III';
    }
  }

  exibirResultado() {
    const alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: this.descricao,
      buttons: ['OK']
    });
    alert.present();
    this.limparCampos();
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

}
