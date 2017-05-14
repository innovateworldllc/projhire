import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerHomePage } from './worker-home';

@NgModule({
  declarations: [
    WorkerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerHomePage),
  ],
  exports: [
    WorkerHomePage
  ]
})
export class WorkerHomePageModule {}
