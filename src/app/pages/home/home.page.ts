import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { LoginComponent } from '../../components/login/login.component';
import { GlobalVariablesService } from '../../services/globalvars/global-variables.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  loggedIn = false;

  constructor(public modalCtrl: ModalController, public global: GlobalVariablesService,private navCtrl: NavController,private router: Router ) { 
   
    
  }

  ngOnInit() {
  }

  async openLogin(){
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      componentProps: {},
      backdropDismiss:false
     })

     modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
       
        
      }
    });
     
     await modal.present()
     
  }

  navigate(path: string){
    this.navCtrl.navigateForward(path);
  }

}
