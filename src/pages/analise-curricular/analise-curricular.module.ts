import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnaliseCurricularPage } from './analise-curricular';

@NgModule({
  declarations: [
    AnaliseCurricularPage,
  ],
  imports: [
    IonicPageModule.forChild(AnaliseCurricularPage),
  ],
})
export class AnaliseCurricularPageModule {}
