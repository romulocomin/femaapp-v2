import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



let apiUrl = "http://173.255.197.140/apihomolog/fema/api.php/";

@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {


  public itens :  Array<any>;
  selected = null;
  users: Array<any>;
  boleto: string = "abertos";
  public boletos : Array<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    ) {

      this.boleto = "abertos";


  }
  ionViewWillEnter(){
    this.boleto = "abertos";
    
    }
  ionViewDidLoad() {
    this.users = [
      {
        curso : '2012 tec. radiologia - 01 ',
        codcuso: '1234',
        matricula: '111',
       
      },
      {
        curso : '2012 tec. radiologia - 02',
        codcuso: '1234',
        matricula: '111',
       
      }];
  
   
  }
  ngOnInit() {
    
     this.authService.getAll().then(data => {
       
      this.itens= <any> Object.entries(data[0]);

          
        });  
        
  }


  goBack(): void {
    this.navCtrl.setRoot(HomePage);
  }

  
public onItemSelection(selection) {
if ( selection != undefined) {
console.log("item selected: "+this.selected);
this.declareTechnologies();
} else {
console.log("no item selected");
}
}


  declareTechnologies() : void
   {
    
     
       this.boletos = [
          {
            data : '05/05/2018',
            valor: '145,00',
            id: '1',
           
          },
          {
            data : '06/05/2018',
            valor: '145,00',
            id: '2',
           
          },
          {
            data : '07/05/2018',
            valor: '145,00',
            id: '3',
           
          },
          {
            data : '08/05/2018',
            valor: '122,00',
            id: '4',
           
          },
          ];
    }
}
