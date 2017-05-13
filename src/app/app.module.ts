import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';


export const firebaseConfig = {
    apiKey: "AIzaSyDBVO07qN1fGOgQ6tPt0XG0fnCR6AHQ0mQ",
    authDomain: "projhire.firebaseapp.com",
    databaseURL: "https://projhire.firebaseio.com",
    projectId: "projhire",
    storageBucket: "projhire.appspot.com",
    messagingSenderId: "64369705068"
};
@NgModule({
  declarations: [
    MyApp,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

