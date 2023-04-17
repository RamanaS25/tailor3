import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { LoginComponent } from '../components/login/login.component';
import { GlobalVariablesService } from '../services/globalvars/global-variables.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  loggedIn = false;

  constructor(public modalCtrl: ModalController, public global: GlobalVariablesService ) { 
    if(!global.loggedIn){
    this.openLogin()
    }
    
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

}
