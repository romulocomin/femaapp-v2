import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { AnaliseCurricularPage } from './../pages/analise-curricular/analise-curricular';
import { NotasFaltasPage } from './../pages/notas-faltas/notas-faltas';
import { FinanceiroPage } from './../pages/financeiro/financeiro';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  profileData = [];
  pages: Array<{title: string, component: any}>;

  constructor(
    public app: App, 
    public authService: AuthServiceProvider,
    public platform: Platform, 
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();
    this.showProfile();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Analise Curricular', component: AnaliseCurricularPage },
      { title: 'Financeiro', component: FinanceiroPage },
      { title: 'Home', component: HomePage },
      
      { title: 'Notas/Faltas', component: NotasFaltasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  backToWelcome(){
    const root = this.app.getRootNav();
     root.popToRoot();
   }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
  logout(){
    //Api Token Logout 
    
    localStorage.clear();
    this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 1000);
    
  }

  showProfile() {
    this.authService.load("login--").then((result) =>{
      this.profileData =<any>result;
      console.log("login"+this.profileData['codcoligada']);
      
    });
  }
 
 

}
