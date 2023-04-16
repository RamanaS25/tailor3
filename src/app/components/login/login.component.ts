import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginComponent  implements OnInit {

  enteredUser = {
    username: '',
    password:'',
   
  }
  

  users = [
    {
      username: 'abhay',
      password:'123',
      role:'admin'
    },

    {
      username: 'Ramana',
      password:'123',
      role:'tailor'
    }

  ]

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss(true)
  }

  signIn(){
    console.log('hi', this.enteredUser)

    for(let x in this.users){
      console.log(this.users[x].username)
      if(this.users[x].username === this.enteredUser.username && this.users[x].password === this.enteredUser.password){
        
        this.closeModal()
        console.log('done')
      }
    }


  }



}