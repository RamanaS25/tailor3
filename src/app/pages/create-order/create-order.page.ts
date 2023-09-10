import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../../services/apiServices/api-service.service';




interface LocationState {
  navigationId?: number;
  urlAfterRedirects?: string;
}


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateOrderPage implements AfterViewInit {
 
  customers: any
  modalOpen = false

  sFilter = 'Customer Name'
  selectedCustomer:any = null
  selectedModel = 'Kurta'
  orderLink = '../../assets/clothAssets/shirt.svg'
  isToastOpen = false

  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private service: ApiService,
    private navCtrl: NavController,
   ){

    this.customers = service.loadUsers()
    console.log(this.customers)
  }

  ngOnInit() {
  }

  public get showBackButton(): boolean {
    const state = this.location.getState() as LocationState;
    const previousUrl = state.navigationId ? state.urlAfterRedirects : '';
  
    // This condition will return `true` if the previous route does NOT match the specific route
    return previousUrl !== '/orders';
  }

  ngAfterViewInit() {
 
  }
  placeOrder(x:any){
    this.isToastOpen = x
    this.navCtrl.navigateForward('orders');
  }
  

}
