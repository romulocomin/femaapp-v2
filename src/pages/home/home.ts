import { AnaliseCurricularPage } from './../analise-curricular/analise-curricular';
import { NotasFaltasPage } from './../notas-faltas/notas-faltas';
import { FinanceiroPage } from './../financeiro/financeiro';

import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 public avatar;
 financeiroPage = FinanceiroPage;
 notas=NotasFaltasPage;
 analise = AnaliseCurricularPage;

 profileData = [];

  constructor(public navCtrl: NavController, navParams:NavParams, public authService: AuthServiceProvider
  ) {
    this.avatar = navParams.get('eu');
    this.showProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }
  
  showProfile() {
    this.authService.load("login").then((result) =>{
      this.profileData =<any>result;
      
      
    });
  }

}
