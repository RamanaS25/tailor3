import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/apiServices/api-service.service';

@Component({
  selector: 'app-assign-to-tailor',
  templateUrl: './assign-to-tailor.page.html',
  styleUrls: ['./assign-to-tailor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AssignToTailorPage implements OnInit {
   order: any

   measurements = {
    chest: 102, // centimeters
    waist: 81, // centimeters
    hips: 97, // centimeters
    inseam: 81, // centimeters
    sleeveLength: 86, // centimeters
    shoulderWidth: 46 // centimeters
  };

  tailors: any

  selectedTailor: any

  pendingOrders: any

  isToastOpen = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    public services: ApiService,
    private navCtrl: NavController) { 

    this.services.users$.subscribe(users => {
      this.tailors = users;
    });
    this.pendingOrders = services.loadOrders()
  }

  ngOnInit() {
    this.order = this.router.getCurrentNavigation()?.extras?.state?.['data'];
    if (this.order) {
      console.log('Received object:', this.order);
    } else {
      console.log('No object received');
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
    this.navCtrl.navigateForward('orders');
  }
  

}
