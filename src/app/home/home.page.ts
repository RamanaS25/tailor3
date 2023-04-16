import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  loggedIn = false;

  constructor(public modalCtrl: ModalController) { 
    
    this.openLogin()
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
        this.loggedIn = dataReturned.data;
        
      }
    });
     
     await modal.present()
     
  }

}
