import { HomePage } from './../home/home';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  resposeData : any;
  userData = {"email":"", "password":""};
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider
  , private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  login() {
    this.authService.load('login')
    .then(data => {
      this.users = data;
      console.log(this.users);

      this.navCtrl.setRoot(HomePage,{
        eu : "nome badanha"
       });
    });

  }
go():void{
this.navCtrl.setRoot(HomePage);

}
 
   
  logina(){
    
    console.log(this.userData.email+"---"+this.userData.password)
    if(this.userData.email && this.userData.password){
     this.authService.postData(this.userData, "login").then((result) =>{
     this.resposeData = result;
     console.log("aaa"+result);
     if(this.resposeData!=""){
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
     this.navCtrl.setRoot(HomePage,{
      eu : JSON.stringify(this.resposeData)
     });
     console.log(this.resposeData);
   }
   else{
     this.presentToast("Por informe usuário e senhas corretos");
   }
     
 
 
     }, (err) => {
       this.presentToast(err)
     });
    }
    else{
     this.presentToast("Informe usuário e senha");
    }
   
   }

 
 
   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

}
