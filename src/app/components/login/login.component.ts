import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { GlobalVariablesService } from 'src/app/services/globalvars/global-variables.service';


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
    role:''
   
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

  constructor(public modalCtrl: ModalController, public global: GlobalVariablesService,private navCtrl: NavController,private router: Router) { }

  ngOnInit() {}

  

  signIn(){
    console.log('hi', this.enteredUser)

    for(let x in this.users){
      console.log(this.users[x].username)
      if(this.users[x].username === this.enteredUser.username && this.users[x].password === this.enteredUser.password){

        this.global.user = this.enteredUser
        this.global.loggedIn = true

        if(this.global.user.role = 'tailor'){
          console.log('tailor', this.global.user)
          this.navCtrl.navigateForward('tailor-dashboard');
                 
          }else{
          this.navCtrl.navigateForward('home');
           
          }
      
      
        
        
       
        console.log('done')
         break
      }
    }


  }

  devSignIn( ){
    this.global.user = this.users[0]
    this.global.loggedIn = true
    this.navCtrl.navigateForward('home');
   
    
    
  }



}
