import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-worker-home',
  templateUrl: 'worker-home.html',
})
export class WorkerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  logOut(){
    this.authProvider.userLogout().then(() => {
     this.navCtrl.setRoot('LandingPage');
    });
  }

}
