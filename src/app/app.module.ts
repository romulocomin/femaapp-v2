import { CustomLegendaComponent } from './../components/custom-legenda/custom-legenda.component';
import { LoginPage } from './../pages/login/login';
import { NotasFaltasPage } from './../pages/notas-faltas/notas-faltas';
import { FinanceiroPage } from './../pages/financeiro/financeiro';
import { AnaliseCurricularPage } from './../pages/analise-curricular/analise-curricular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from './../components/custom-header/custom-header.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';
@NgModule({
  declarations: [
    AnaliseCurricularPage,
    CustomHeaderComponent,
    CustomLegendaComponent,
    FinanceiroPage,
    HomePage,
    ListPage,
    LoginPage,
    MyApp,
    NotasFaltasPage,
    TextAvatarDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnaliseCurricularPage,
    FinanceiroPage,
    HomePage,
    ListPage,
    LoginPage,
    MyApp,
    NotasFaltasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
