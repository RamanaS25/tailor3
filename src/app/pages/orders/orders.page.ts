import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/apiServices/api-service.service';
import { NavController } from '@ionic/angular';
import { link } from 'fs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OrdersPage implements OnInit {
  segment = 'pOrders'

  orders:any
  customers:any

  sFilter = 'Id'

  modalOpen = false
  selectedOrder:any
  linkedCustomer: any;

  measurements = {
    chest: 102, // centimeters
    waist: 81, // centimeters
    hips: 97, // centimeters
    inseam: 81, // centimeters
    sleeveLength: 86, // centimeters
    shoulderWidth: 46 // centimeters
  };

  constructor( public service: ApiService,private navCtrl: NavController,private router: Router) { 
    this.orders = this.service.loadOrders()
    this.customers = this.service.loadUsers()
    console.log(this.orders,this.customers)
  }

  ngOnInit() {
  }

  createOrder(){
    this.navCtrl.navigateForward('orders/create-order');
   
  }

  assignToTailor(obj: any) {
   
    const navigationExtras: NavigationExtras = {
      state: {
        data: obj,
      },
    };
  
    this.router.navigate(['orders/assign'], navigationExtras);
  }
  

  getObjectById(cusId:number){
    this.linkedCustomer = this.service.findItemById(this.customers,cusId)
    console.log(this.linkedCustomer)
  }
  
}
