import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnaliseCurricularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analise-curricular',
  templateUrl: 'analise-curricular.html',
})
export class AnaliseCurricularPage {


  historyII: { modulo: string; disciplina: string; cod_disciplina: string; creditos: string; carga_horaria: string; situação: string; conceito: string; nota: string; falta: string; }[];
  history: { modulo: string; disciplina: string; cod_disciplina: string; creditos: string; carga_horaria: string; situação: string; conceito: string; nota: string; falta: string; }[];
  periodo: { curso: string; codcuso: string; matricula: string; }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaliseCurricularPage');
    this.newFunction();
    this.declareHistory();

  }


  selected = null;
  

  public newFunction(): void {
    this.periodo = [
      {
        curso: '2012 tec. radiologia - 01 ',
        codcuso: '1234',
        matricula: '111',
      },
      {
        curso: '2012 tec. radiologia - 02',
        codcuso: '1234',
        matricula: '111',
      }
    ];
  }



  public onItemSelection(selection) {
    if (selection != undefined) {
      console.log("item selected: " + this.selected);

    } else {
      console.log("no item selected");
    }
  }


  declareHistory(): void {


    this.history = [
      {
        modulo: 'I',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS I - TM (686)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"



      },
      {
        modulo: 'I',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS I - TM (686)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"
      },
      {
        modulo: 'II',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS II - TM (687)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"



      },
      {
        modulo: 'II',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS II - TM (687)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"
      },

    ];
    this.historyII = [
      {
        modulo: 'I',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS I - TM (686)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"



      },
      {
        modulo: 'I',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS I - TM (686)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"
      },
      {
        modulo: 'II',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS II - TM (687)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"



      },
      {
        modulo: 'II',
        disciplina: 'RELAÇÕES HUMANAS E PROFISSIONAIS II - TM (687)',
        cod_disciplina: 'D0000223',
        creditos: "4",
        carga_horaria: "60h",
        situação: "APROVADO",
        conceito: "A",
        nota: "9.0",
        falta: "0"
      },

    ];
  }
}
