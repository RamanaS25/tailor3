import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { faker } from '@faker-js/faker';
import { slicePipe } from '../pipes/slice-pipe.module';
import { ApiService } from '../services/apiServices/api-service.service';
import { Observable } from 'rxjs';


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  pOrders: number;
  cOrders: number;
}

export interface Orders {
  idt: number;
  customerName:string
  subDate: string;
  DueDate: string;
  clothingType:string;
  fabricUsed: string;
  price: number;
  completed:boolean
}



@Component({
  selector: 'app-tailors',
  templateUrl: './tailors.page.html',
  styleUrls: ['./tailors.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, slicePipe]
})


export class TailorsPage implements OnInit {
  
  users: User[] | any;
  orders: Orders[] = []

  sFilter ='Id'

  cloths = [
    'shirt',
    'pants',
    'dhoti',
    'kurta'
  ]

  fabric = [
    'cotton',
    'wool',
    'silk',
    'chiffon'
  ]

  selectedTailor: User
  segment = 'comp'  

  modalOpen = false

  selectedOrder:any
   pushOrder: any

  constructor( public service: ApiService) { 
    this.service.users$.subscribe(users => {
      this.users = users;
    });

    // this.users$ = this.service.users$

    this.selectedTailor = this.users[0]
   this.orders=  this.service.loadOrders()
   this.pushOrder = this.orders[0]
   console.log(this.pushOrder)
  }

  ngOnInit() {
  }
 
  addNewUser() {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      firstName: 'New',
      lastName: 'User',
      pOrders: 0,
      cOrders: 0,
    };
  
    this.service.addUser(newUser);
  }




  

}
