import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, public formBuilder: FormBuilder, 
    public authProvider: AuthProvider) {

      this.signupForm = formBuilder.group({
        accountType: [''],
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        company: ['', Validators.compose([Validators.minLength(3), Validators.required])]
      });
  }
  userSignup(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authProvider.userSignup(this.signupForm.value.email, this.signupForm.value.password, 
        this.signupForm.value.company)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot('WorkerHomePage');
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          
          const alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel' }]
          });
          alert.present();
          
        });
      
      });
      
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}

